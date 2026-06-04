import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FeatureHeader } from '../../shared/components/feature-header/feature-header';

@Component({
  selector: 'app-notifications',
  imports: [FeatureHeader],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notifications {
  readonly unreadCount = signal(2);

  readonly notifications = signal([
    {
      id: 1,
      title: 'Novo aviso da administracao',
      description: 'A reuniao de alinhamento da semana foi confirmada para quinta-feira as 20h.',
      timeLabel: 'Ha 10 min',
      tone: 'highlight',
    },
    {
      id: 2,
      title: 'Atualizacao de servicos',
      description: 'Os links rapidos da Home receberam uma nova ordem para facilitar o acesso.',
      timeLabel: 'Ha 1 h',
      tone: 'default',
    },
    {
      id: 3,
      title: 'Perfil aguardando revisao',
      description: 'Revise seus dados cadastrais para manter o acesso e as informacoes sempre atualizadas.',
      timeLabel: 'Ontem',
      tone: 'default',
    },
  ]);
}