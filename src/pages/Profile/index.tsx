import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

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
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={"marcosjbm"}
                  reponame={"youtube-content"}
                  description={"Contains all of my Youtube lessons code"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={3}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
