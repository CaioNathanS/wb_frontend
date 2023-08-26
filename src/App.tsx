import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import Navigation from "./navigation/Navigation";
import "./App.css";
import { defaultTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;
