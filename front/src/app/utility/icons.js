import { FaHome, FaCar, FaShoppingBag } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

const CatIcons = () => {
  const icons = [
    {
      id: 1,
      key: "Home",
      value: <FaHome />,
    },
    {
      id: 2,
      key: "Food & Drinks",
      value: <MdRestaurant />,
    },
    {
      id: 3,
      key: "Shopping",
      value: <FaShoppingBag />,
    },
    {
      id: 4,
      key: "Transportation",
      value: <FaCar />,
    },
    {
      id: 5,
      key: "Investment",
      value: <MdCurrencyExchange />,
    },
    {
      id: 6,
      key: "Plane",
      value: <FaPlaneDeparture />,
    },
    {
      id: 7,
      key: "Hospital",
      value: <FaHospitalUser />,
    },
    {
      id: 8,
      key: "Cinema",
      value: <MdLocalMovies />,
    },
  ];
  return icons;
};
export default CatIcons;
