export type GamePlatform = 'PLAYSTATION' | 'PC' | 'XBOX';

export type Game = {
    id: number;
    title: string;
    platform: GamePlatform;
    label: string;
    value: number;
}