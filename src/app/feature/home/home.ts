import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CurrentDate } from '../../shared/components/current-date/current-date';
import { HomeCarousel } from '../../shared/components/home-carousel/home-carousel';
import { ServicesSection } from '../../shared/components/services-section/services-section';
import { CarouselSlide, ServiceCard } from '../../shared/models/home.models';

@Component({
  selector: 'app-home',
  imports: [CurrentDate, HomeCarousel, ServicesSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly slides = signal<CarouselSlide[]>([
    {
      id: 'vida-digital',
      icon: 'temple',
      eyebrow: 'Mensagem do oriente',
      title: 'O templo agora tambem e digital.',
      description: 'Acompanhe comunicados e orientacoes da loja em um unico ambiente.',
      actionLabel: 'Saiba mais',
    },
    {
      id: 'servicos-digitais',
      icon: 'compass',
      eyebrow: 'Vida em loja',
      title: 'Irmandade e agenda reunidas com clareza.',
      description: 'Consulte links, avisos e recursos da caminhada maconica.',
      actionLabel: 'Explorar',
    },
    {
      id: 'notificacoes',
      icon: 'bell',
      eyebrow: 'Avisos da oficina',
      title: 'Os avisos mais importantes ficam a vista.',
      description: 'Receba lembretes de reunioes, eventos e comunicados da ordem.',
      actionLabel: 'Ver avisos',
    },
  ]);

  readonly services = signal<ServiceCard[]>([
    { id: 'links', title: 'Links', icon: 'link', route: '/page' },
  ]);

  readonly currentDateLabel = computed(() =>
    new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date()),
  );
}