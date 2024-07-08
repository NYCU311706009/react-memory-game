import { useEffect, useState } from "react";
import GameBlock from "./GameBlock";
function Board() {
  const [level, setLevel] = useState(0);
  const ANSWER_LENGTH = 3
  const BLOCK_LENGTH = 9

  const initialBlocks = Array.from({ length: BLOCK_LENGTH }, (_, index) => ({
    id: index,
    isSelected: false,
    isAnswer: false
  }));
  const [blocks, setBlocks] = useState(initialBlocks);

  const toggleBlock = (id, e) => {
    console.log("click:" + id);
    // e.preventDefault();
    setBlocks(
      blocks.map((block) => {
        return block.id === id ? { ...block, isSelected: !block.isSelected } : block;
      })
    );
  };

  const generateAnswer = (count, max) =>{
    const answer = new Set();
    while (answer.size < count){
      answer.add(Math.floor(Math.random() * max));
    }
    // 轉回array
    return [...answer];
  }

  useEffect(()=>{
    const answer = generateAnswer(ANSWER_LENGTH, BLOCK_LENGTH)
    setBlocks(
      blocks.map((block) => {
        return answer.includes(block.id) ? { ...block, isAnswer: true } : block;
      })
    );
  }, [])


  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Current level: {level}
      </h2>
      <div className="board">
        {blocks.map((block) => {
          return (
            <GameBlock key={block.id} block={block} toggleBlock={toggleBlock} />
          );
        })}
      </div>
    </div>
  );
}
export default Board;
