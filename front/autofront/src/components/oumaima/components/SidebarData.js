import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';
 export const SidebarData =[
    {
        title: 'Home',
        path: '/oumaima',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
        {title: 'Calendrier',
        path: '/Demo',
        icon: <AiIcons.AiOutlineCalendar />,
        cName: 'nav-text'
      },
      {
        title: 'User Profile',
        path: '/Userprofile',
        icon: <CgIcons.CgProfile/>,
        cName: 'nav-text'
      },
      {
        title: 'Test Gratuit',
        path: '/TestGratuit',
        icon: <BiIcons.BiTestTube />,
        cName: 'nav-text'
      },
      {
        title: 'Payement',
        path: '/payement',
        icon: <MdIcons.MdPayment />,
        cName: 'nav-text'
      },
     
      
      
 ]