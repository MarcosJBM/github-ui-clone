import "react-calendar-heatmap/dist/styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Profile from "./pages/Profile";
import Repo from "./pages/Repo";

import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeName, themes } from "./styles/themes";

const App = () => {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/:username' element={<Profile />} />
          <Route path='/:username/:repo' element={<Repo />} />
        </Routes>

        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
