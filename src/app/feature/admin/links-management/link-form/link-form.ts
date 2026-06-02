import {
  Component,
  ChangeDetectionStrategy,
  effect,
  inject,
  signal,
  input,
  output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { LinksMgmtService, LinkItem } from '../service/links-management.service';

@Component({
  selector: 'app-link-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './link-form.html',
  styleUrl: './link-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkFormComponent {

  readonly fb = inject(FormBuilder);
  readonly linksMgmtService = inject(LinksMgmtService);

  readonly editingLink = input<LinkItem | null>(null);
  readonly linkSaved = output<LinkItem>();
  readonly formClosed = output<void>();

  readonly form: FormGroup = this.fb.nonNullable.group({
    link: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
    descricao: ['']
  });

  readonly loading = signal(false);
  readonly errorMessage = signal('');

  constructor() {
    effect(() => {
      const currentLink = this.editingLink();

      if (currentLink) {
        this.form.reset({
          link: currentLink.link,
          descricao: currentLink.descricao || ''
        });
        return;
      }

      this.form.reset({
        link: '',
        descricao: ''
      });
    });
  }

  async submit() {
    if (this.form.invalid) {
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    try {
      const formValue = this.form.getRawValue();
      let savedLink: LinkItem;

      if (this.editingLink()) {
        savedLink = await this.linksMgmtService.updateLink(
          this.editingLink()!.id!,
          formValue
        );
      } else {
        savedLink = await this.linksMgmtService.createLink(formValue);
      }

      this.linkSaved.emit(savedLink);
    } catch (error: any) {
      this.errorMessage.set(error.message || 'Erro ao salvar link');
    } finally {
      this.loading.set(false);
    }
  }

  cancel() {
    this.form.reset();
    this.formClosed.emit();
  }
}
