import { useEffect, useState } from "react";

function GameBlock({block, toggleBlock}) {

  const[showAnswer, setShowAnswer] = useState(true);

  const getBlockColor = () => {
    if (showAnswer){
      return block.isAnswer ? "green" : "red"
    } else
      return block.isSelected ? (block.isAnswer ? "green" : "red") : "white"
  };

  useEffect(()=>{
    // TODO: show the answer for 2 second before the game start
    
    const timer = setTimeout(()=>{
      setShowAnswer(false);
    }, 2000)
    // 
    return ()=> clearTimeout(timer)
  },[])


  return (
    <div
      className="block"
      style={{ 
        
        backgroundColor: getBlockColor() }}
      onClick={(e) => toggleBlock(block.id, e)}
    >
      <p style={{ color: "white" }}>{block.id}</p>
    </div>
  );
}
export default GameBlock;
