import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  input,
  output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksMgmtService, LinkItem } from '../service/links-management.service';

@Component({
  selector: 'app-links-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-list.html',
  styleUrl: './links-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksListComponent {

  readonly linksMgmtService = inject(LinksMgmtService);

  readonly links = input<LinkItem[]>([]);
  readonly editLink = output<LinkItem>();
  readonly deleteLink = output<number>();
  readonly loading = input(false);

  readonly deletingId = signal<number | null>(null);
  readonly deleteError = signal('');

  async onDelete(id: number) {
    if (!confirm('Tem certeza que deseja deletar este link?')) {
      return;
    }

    this.deletingId.set(id);
    this.deleteError.set('');

    try {
      await this.linksMgmtService.deleteLink(id);
      this.deleteLink.emit(id);
    } catch (error: any) {
      this.deleteError.set(error.message || 'Erro ao deletar link');
      this.deletingId.set(null);
    }
  }

  onEdit(link: LinkItem) {
    this.editLink.emit(link);
  }

  extrairDominio(link: string): string {
    try {
      const url = new URL(link);
      let domain = url.hostname;
      if (domain.startsWith('www.')) {
        domain = domain.substring(4);
      }
      return domain;
    } catch {
      return link;
    }
  }
}
