import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const SEE_PROFILE_QUERY = gql`
  query seeProfile {
    seeProfile {
      id
      username
      name
      email
      avatarURL
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(SEE_PROFILE_QUERY, {
    skip: !hasToken,
  });
  console.log(data);
  useEffect(() => {
    if (data?.seeProfile === null) {
      logUserOut();
    }
  }, [data]);
  return { data };
}
export default useUser;