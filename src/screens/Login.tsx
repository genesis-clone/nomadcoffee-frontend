import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from '../apollo';

const Title = styled.h1``;
const Container = styled.div``;

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <div>
        <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
      </div>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </Container>
  );
}

export default Login;
