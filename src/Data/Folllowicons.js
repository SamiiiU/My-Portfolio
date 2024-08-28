import { SiLinkedin  } from "react-icons/si";
import { FaBehanceSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const items = [
  {
    title: "LinkedIn",
    icon: <SiLinkedin />,  // Replace with your desired icon component
    href: "https://www.linkedin.com/in/sami-ullah-9799492b3/",           // Route to navigate to
  },
  {
    title: "Behance",
    icon: <FaBehanceSquare />,
    href: "",
  },
  {
    title: "Github",
    icon: <BsGithub />,
    href: "https://github.com/SamiiiU",
  },
  {
    title: "Facebook",
    icon: <FaFacebookF  />,
    href: "https://www.facebook.com/profile.php?id=100035111928058",
  },

  {
    title: "Instagram",
    icon: <FaInstagram  />,
    href: "https://www.instagram.com/sami_ullah2.0/",
  },
];
