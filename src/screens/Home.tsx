import { darkModeVar, isLoggedInVar } from '../apollo';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={() => isLoggedInVar(false)}>Log out now!</button>
      </div>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </div>
  );
}

export default Home;
