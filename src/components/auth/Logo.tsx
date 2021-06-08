import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SLogo = styled.div`
  color: ${(props) => props.theme.accent}
`;

function Logo() {
  return (
    <SLogo>
      <FontAwesomeIcon icon={faCoffee} size="3x" />
    </SLogo>
  )
}

export default Logo;
