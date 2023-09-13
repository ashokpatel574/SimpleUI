import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./footer.css";

const footerSocialIconsList = [
  {
    id: "1",
    link: "https://github.com/ashokpatel574/SimpleUI",
    Icon: GitHubIcon,
  },
  {
    id: "2",
    link: "https://www.linkedin.com/in/ashokpatel574/",
    Icon: LinkedInIcon,
  },
  { id: "3", link: "https://twitter.com/ashokpatel574", Icon: TwitterIcon },
];

const Footer = () => {
  return (
    <footer className="footer_container">
      <ul className="social_links flex-center">
        {footerSocialIconsList.map((listItem) => {
          const { id, link, Icon } = listItem;
          return (
            <li className="link_list-item" key={id}>
              <Link className="link" to={link} target="_blank">
                <Icon />
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="footer_trademark">© 2023 Ashok Patel</p>
    </footer>
  );
};

export default Footer;
