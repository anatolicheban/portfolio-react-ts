import { sidebarSocials } from "../assets/data/sidebarSocials";
const avatar = require("../assets/img/avatar.jpg");

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__avatar">
        <img src={avatar} alt="avatar"></img>
      </div>
      <h2 className="sidebar__name">Cheban Anatoli</h2>
      <p className="sidebar__job-position">Frontend Developer</p>
      <p className="sidebar__info">
        Good knowledges in modern frontend technologies and ability to learn more.
      </p>
      <ul className="sidebar__socials">
        {sidebarSocials.map(({ id, path, title, icon }) => (
          <li key={id} className="sidebar__socials-item">
            <a className="sidebar__socials-link" href={path} title={title}>
              <img
                style={{
                  fill: "#fff",
                }}
                src={icon}
                alt={title}
              />
            </a>
          </li>
        ))}
      </ul>
      <a className="sidebar__contact-btn" href="mailto:tolik.cheban.2019@gmail.com">
        Contact me
      </a>
    </aside>
  );
};

export default Sidebar;
