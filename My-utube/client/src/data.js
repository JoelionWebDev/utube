import React from "react";
import {
  FaYoutube,
  FaTelegram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/eBook",
    text: "eBook",
  },
  {
    id: 2,
    url: "./youtube",
    text: "Youtube",
  },
  {
    id: 3,
    url: "./courses",
    text: "Courses",
  },
  {
    id: 4,
    url: "/blog",
    text: "Blog",
  },
  {
    id: 5,
    url: "./guide",
    text: "Guide",
  },
  {
    id: 6,
    url: "./login",
    text: "Login",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.youtube.com/@joetechstudio/",
    icon: <FaYoutube />,
    name: "youtube",
  },
  {
    id: 2,
    url: "https://web.facebook.com/joel.iguse",
    icon: <FaFacebook />,
  },

  {
    id: 3,
    url: "https://twitter.com/JoelionXpress",
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/igono-joel-88b680185",
    icon: <FaLinkedin />,
  },
  {
    id: 5,
    url: "https://t.me/JoelIgono",
    icon: <FaTelegram />,
  },
];
