import { headerLinks } from "../assets/data/headerLinks";
import Switch from "react-switch";
import { useState } from "react";
import HeaderLink from "./HeaderLink";

type HeaderProps = {
  onChangeTheme: () => void;
  theme: "dark" | "light";
};

const Header = ({ onChangeTheme, theme }: HeaderProps) => {
  const [currPath, setCurrPath] = useState(window.location.pathname);
  return (
    <header className="header">
      <h1 className="header__name">Cheban Anatoli</h1>
      <div className="header__box">
        <ul className="header__links">
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
