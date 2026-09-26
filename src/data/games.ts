import type { Dictionary } from '../i18n/es';
import type { Scene } from '../scripts/scenes';

export type GameId = keyof Dictionary['games']['items'];

export interface Game {
  id: GameId;
  scene: Scene;
  status: 'live' | 'wip';
  url?: string;
}

export const games: Game[] = [
  { id: 'olvidaron', scene: 'olvidaron', status: 'live', url: 'https://christian97dd.itch.io/a-los-que-olvidamos' },
  { id: 'hide', scene: 'hide', status: 'live', url: 'https://christian97dd.itch.io/protocol-hide' },
  { id: 'gravity', scene: 'gravity', status: 'live', url: 'https://christian97dd.itch.io/gravity-flip' },
  { id: 'guardian', scene: 'guardian', status: 'wip' },
  { id: 'familiar', scene: 'familiar', status: 'wip' },
];
