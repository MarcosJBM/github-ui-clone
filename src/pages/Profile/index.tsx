import ProfileData from "../../components/ProfileData";

import { Container, Main, LeftSide, RightSide } from "./styles";

const Profile = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"marcosjbm"}
            name={"marcosbotene"}
            avatarUrl={
              "https://avatars1.githubusercontent.com/u/67931411?s=460&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4"
            }
            followers={6}
            following={9}
            company={"Something"}
            location={"Santa Catarina, Brazil"}
            email={"marcosjbotene@gmail.com"}
            blog={"Something"}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
