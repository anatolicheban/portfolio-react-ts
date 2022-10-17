import { NavLink } from "react-router-dom";

type HeaderLinkProps = {
  id: number;
  name: string;
  path: string;
  onClick: () => void;
  active: boolean;
};

const HeaderLink = ({ active, onClick, name, path }: HeaderLinkProps) => {
  return (
    <li className="header__links-item">
      <NavLink
        onClick={onClick}
        className={`header__link ${active ? "active-link" : ""}`}
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
