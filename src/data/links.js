import { FaUserFriends } from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineLineChart,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { GiClothes, GiConverseShoe } from "react-icons/gi";
import { RiProductHuntLine } from "react-icons/ri";

const links = [
  {
    title: "Categorys",
    links: [
      { name: "products", icon: <RiProductHuntLine /> },
      { name: "clothes", icon: <GiClothes /> },
      { name: "shoes", icon: <GiConverseShoe /> },
    ],
  },
  {
    title: "Pages",
    links: [
      { name: "orders", icon: <AiOutlineShoppingCart /> },
      { name: "employees", icon: <FaUserFriends /> },
      { name: "customers", icon: <CgUserList /> },
    ],
  },
  {
    title: "Charts",
    links: [
      { name: "line", icon: <AiOutlineLineChart /> },
      { name: "area", icon: <AiOutlineAreaChart /> },
    ],
  },
];

export default links;
