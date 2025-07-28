import { BadgeDollarSign, Home, Images, Info, Phone } from "lucide-react";

export const navs = [
  {
    navLink: "/",
    label: "Home",
    Home,
  },
  {
    navLink: "/pricing",
    label: "Pricing",
    BadgeDollarSign,
  },
  {
    navLink: "/blog",
    label: "Blog",
    Images,
  },
  {
    navLink: "/about",
    label: "About",
    Info,
  },
  {
    navLink: "/contact",
    label: "Contact",
    Phone,
  },
];
