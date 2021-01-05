import { Container, Githublogo, SearchForm } from "./styles";

const Header = () => {
  return (
    <Container>
      <Githublogo />
      <SearchForm>
        <input type='text' />
      </SearchForm>
    </Container>
  );
};

export default Header;
