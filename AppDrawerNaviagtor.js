import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { CustomSideBarMenu } from './CustomSideBarMenu.js'
import NotificationScreen from './NotificationsScreen'

export const AppDrawerNavigator = createDrawerNavigation({
    Notifications : {
        screen : NotificationScreen
    }
},
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName : 'Home'
})