import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeName } from "../../styles/themes";
import { Container, Githublogo, SearchForm } from "./styles";

interface Props {
  themeName: ThemeName;
  setThemeName: (newTheme: ThemeName) => void;
}

const Header = ({ themeName, setThemeName }: Props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLocaleLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <Githublogo onClick={toggleTheme} />
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
