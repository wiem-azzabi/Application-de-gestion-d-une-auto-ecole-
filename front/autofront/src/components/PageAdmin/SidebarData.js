import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
export const SidebarData = [
  {
    title: "Condidat",
    path: "/condidat",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "véhicule",
    path: "/véhicule",
    icon: <AiIcons.AiOutlineCalendar />,
    cName: "nav-text",
  },
  {
    title: "code",
    path: "/code",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "réparation",
    path: "/réparation",
    icon: <BiIcons.BiTestTube />,
    cName: "nav-text",
  },
  {
    title: "planification",
    path: "/planification",
    icon: <MdIcons.MdPayment />,
    cName: "nav-text",
  },
  {
    title: "employé",
    path: "/employé",
    icon: <MdIcons.MdPayment />,
    cName: "nav-text",
  },
];
