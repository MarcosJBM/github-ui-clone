import { Link } from "react-router-dom";
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon,
} from "./styles";

const Repo = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/marcosjbm"}>
          marcosjbm
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/marcosjbm/user-search"}>
          user-search
        </Link>
      </Breadcrumb>

      <p>A ReactJS application using the GitHub API.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/MarcosJBM/User-Search"}>
        <GitHubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
