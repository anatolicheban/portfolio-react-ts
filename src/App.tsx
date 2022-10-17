import { Route, Routes } from "react-router";
import About from "./pages/About";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { Summary } from "./pages/Summary";
import NotFound from "./pages/NotFound";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  const body = document.body;

  if (theme === "light") {
    body.classList.remove("dark");
  } else if (theme === "dark") {
    body.classList.add("dark");
  }

  const changeTheneHandler = () => {
    setTheme((prev) => {
      if (prev === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  return (
    <div className="wrapper">
      <Header onChangeTheme={changeTheneHandler} theme={theme} />
      <div className="wrapper__info">
        <Sidebar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
