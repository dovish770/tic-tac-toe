import { Player } from "./player";

export interface Game{
    id: string,
    player_X: Player
    player_Y: Player,
    isTie: boolean,
    status: gameStatus,
    board: Board
}

export enum gameStatus{
    ongoing,
    finished
}

type TicTacToeValue = 'x' | 'o' | null;

export interface Board {
    [key: number]: 'X' | 'O' | null;
}

