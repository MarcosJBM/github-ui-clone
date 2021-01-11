import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Githublogo, SearchForm } from "./styles";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLocaleLowerCase().trim());
  }

  return (
    <Container>
      <Githublogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
