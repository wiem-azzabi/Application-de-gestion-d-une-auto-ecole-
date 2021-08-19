import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Candidats",
    path: "/candidat",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "véhicules",
    path: "/véhicule",
    icon: <AiIcons.AiFillCar />,
    cName: "nav-text",
  },
  {
    title: "code",
    path: "/code",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Réparation",
    path: "/réparation",
    icon: <AiIcons.AiFillTool />,
    cName: "nav-text",
  },
  {
    title: "Planification",
    path: "/planification",
    icon: <AiIcons.AiFillCalendar />,
    cName: "nav-text",
  },
  {
    title: "Employés",
    path: "/employé",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Se deconnecter",
    path: "/",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
];
