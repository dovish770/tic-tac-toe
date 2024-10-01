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

interface Board {
    y1: [TicTacToeValue, TicTacToeValue, TicTacToeValue];
    y2: [TicTacToeValue, TicTacToeValue, TicTacToeValue];
    y3: [TicTacToeValue, TicTacToeValue, TicTacToeValue]
}