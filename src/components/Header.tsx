import { headerLinks } from "../assets/data/headerLinks";
import Switch from "react-switch";
import { useState, useRef } from "react";
import HeaderLink from "./HeaderLink";

type HeaderProps = {
  onChangeTheme: () => void;
  theme: "dark" | "light";
};

const Header = ({ onChangeTheme, theme }: HeaderProps) => {
  const [currPath, setCurrPath] = useState(window.location.pathname);
  const links = useRef<HTMLUListElement>(null);
  const linksBtn = useRef<HTMLButtonElement>(null);

  const toggleListHandler = () => {
    links.current?.classList.toggle("open");
    linksBtn.current?.classList.toggle("active");
  };
  return (
    <header className="header">
      <h1 className="header__name">
        Cheban Anatoli{" "}
        <button ref={linksBtn} onClick={toggleListHandler} className="header__links-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </h1>
      <div className="header__box">
        <ul ref={links} className="header__links">
          {headerLinks.map(({ id, path, name }) => (
            <HeaderLink
              onClick={() => {
                setCurrPath(path);
              }}
              key={id}
              id={id}
              path={path}
              name={name}
              active={currPath === path}
            />
          ))}
        </ul>

        <div className="header__switch">
          <p className="header__switch-text">{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
          <Switch
            className="header__switch"
            uncheckedIcon={false}
            checkedIcon={false}
            checked={theme === "dark"}
            onChange={onChangeTheme}
            height={20}
            width={45}
            onColor="#5671A6"
            handleDiameter={17}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
