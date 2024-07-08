import UserInfo from './UserInfo'
import Board from './Board';

function GameWrapper() {
  return (
  <div className="wrapper">
    <h1> Memory Game Test</h1>  
    <UserInfo />
    <Board />
  </div>
  );
}
export default GameWrapper;
