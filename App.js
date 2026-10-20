import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

export default function App() {
  const [game, setGame] = useState(new Chess());

  function onDrop(source, target) {
    const gameCopy = new Chess(game.fen());
    try {
      gameCopy.move({ from: source, to: target, promotion: "q" });
      setGame(gameCopy);
      return true;
    } catch {
      return false;
    }
  }

  return <Chessboard position={game.fen()} onPieceDrop={onDrop} boardWidth={400} />;
}
