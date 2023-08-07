// unique id:
import useUniqueId from "../hooks/useId";

// pages:
import Shifoxonalar from "../components/shifoxalar";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Shifoxona from "../components/shifoxona";
import Shifokorlar from "../components/shifokorlar";
import Shifokor from "../components/shifokor";

export const navbar = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/",
    element: <Home />,
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Shifoxonalar",
    path: "/hospitals",
    element: <Shifoxonalar />,
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Biz haqimizda",
    path: "/about",
    element: <About />,
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Aloqa",
    path: "/contact",
    element: <Contact />,
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Shifoxona",
    path: "/hospitals/hospital",
    element: <Shifoxona />,
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Shifoxona",
    path: "/hospitals/hospital/service",
    element: <Shifokorlar />,
    private: true,
    hidden: true,
  },

  {
    id: useUniqueId,
    title: "Shifoxona",
    path: "/hospitals/hospital/service/doctor",
    element: <Shifokor />,
    private: true,
    hidden: true,
  },
];
