import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SLogo = styled.div`
  color: ${(props) => props.theme.accent}
`;

function Logo(props: any) {
  return (
    <SLogo>
      <FontAwesomeIcon icon={faCoffee} { ...props } />
    </SLogo>
  )
}

export default Logo;
