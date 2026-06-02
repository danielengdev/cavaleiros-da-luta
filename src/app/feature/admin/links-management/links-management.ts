import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  OnInit,
  output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksMgmtService, LinkItem } from './service/links-management.service';
import { LinkFormComponent } from './link-form/link-form';
import { LinksListComponent } from './links-list/links-list';

@Component({
  selector: 'app-links-management',
  standalone: true,
  imports: [CommonModule, LinkFormComponent, LinksListComponent],
  templateUrl: './links-management.html',
  styleUrl: './links-management.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksMgmtComponent implements OnInit {

  readonly linksMgmtService = inject(LinksMgmtService);

  readonly links = signal<LinkItem[]>([]);
  readonly loading = signal(false);
  readonly showForm = signal(false);
  readonly editingLink = signal<LinkItem | null>(null);
  readonly errorMessage = signal('');
  readonly backToDashboard = output<void>();

  ngOnInit() {
    this.loadLinks();
  }

  async loadLinks() {
    this.loading.set(true);
    this.errorMessage.set('');

    try {
      const data = await this.linksMgmtService.getLinks();
      this.links.set(data);
    } catch (error: any) {
      this.errorMessage.set(error.message || 'Erro ao carregar links');
    } finally {
      this.loading.set(false);
    }
  }

  openCreateForm() {
    this.editingLink.set(null);
    this.showForm.set(true);
  }

  onEditLink(link: LinkItem) {
    this.editingLink.set(link);
    this.showForm.set(true);
  }

  onLinkSaved(link: LinkItem) {
    const currentLinks = this.links();
    const existingIndex = currentLinks.findIndex(l => l.id === link.id);

    if (existingIndex >= 0) {
      currentLinks[existingIndex] = link;
    } else {
      currentLinks.push(link);
    }

    this.links.set([...currentLinks]);
    this.showForm.set(false);
    this.editingLink.set(null);
  }

  onFormClosed() {
    this.showForm.set(false);
    this.editingLink.set(null);
  }

  returnToDashboard() {
    this.onFormClosed();
    this.backToDashboard.emit();
  }

  onDeleteLink(id: number) {
    this.links.set(this.links().filter(l => l.id !== id));
  }
}
