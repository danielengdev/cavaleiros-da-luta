import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CurrentDate } from '../../shared/components/current-date/current-date';
import { HomeBottomNav } from '../../shared/components/home-bottom-nav/home-bottom-nav';
import { HomeCarousel } from '../../shared/components/home-carousel/home-carousel';
import { ServicesSection } from '../../shared/components/services-section/services-section';
import { TopBar } from '../../shared/components/top-bar/top-bar';
import { CarouselSlide, ServiceCard, UserSummary } from '../../shared/models/home.models';

@Component({
  selector: 'app-home',
  imports: [TopBar, CurrentDate, HomeCarousel, ServicesSection, HomeBottomNav],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly user = signal<UserSummary>({
    greeting: 'Ola,',
    name: 'Diego Maximino de Oliveira',
  });

  readonly slides = signal<CarouselSlide[]>([
    {
      id: 'vida-digital',
      eyebrow: 'Comunicado em destaque',
      title: 'Sua vida digital passa por aqui.',
      description: 'Acesse servicos, atualizacoes e atalhos principais em um unico lugar.',
      actionLabel: 'Saiba mais',
    },
    {
      id: 'servicos-digitais',
      eyebrow: 'Servicos online',
      title: 'Tudo o que voce usa com menos etapas.',
      description: 'Consulte informacoes, encontre servicos e acompanhe novidades da plataforma.',
      actionLabel: 'Explorar',
    },
    {
      id: 'notificacoes',
      eyebrow: 'Alertas',
      title: 'Atualizacoes importantes sempre visiveis.',
      description: 'Receba avisos relevantes e acompanhe o que mudou diretamente pela Home.',
      actionLabel: 'Ver alertas',
    },
  ]);

  readonly services = signal<ServiceCard[]>([
    { id: 'links', title: 'Links', icon: 'link', route: '/page' },
  ]);

  readonly unreadCount = signal(3);

  readonly currentDateLabel = computed(() =>
    new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date()),
  );
}