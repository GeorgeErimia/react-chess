import React, { createContext, useReducer } from "react";
import GameReducer from "./GameReducer";
import Game from "../pages/Game";

const initialState = {
  possibleMoves: [],
};

export const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);
  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
