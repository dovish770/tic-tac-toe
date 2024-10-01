import { gameStatus } from "./game";

export interface Move{
    Player: player,
    position: [number, number]
}

export type player = 'x' | 'o';

export interface gameResponse{
    gameId: number,
    move: Move,
    status: gameStatus,
    result?: string
}

export interface gameRequest{
    gameId: number,
    move: Move
}



