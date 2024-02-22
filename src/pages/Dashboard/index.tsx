import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardAlerts from '../Alerts';
import {DASHBOARD} from '../../constants/string';
import HomeDashBoard from '../DashBoardHome';
import FirstAidDashBoard from '../FirstAids';
import ProfileDashBoard from '../Profile';
import NewsFeedDashBoard from '../NewsFeed';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const BottomTabNavigation = createBottomTabNavigator();

export default function DashBoard() {
  return (
    <BottomTabNavigation.Navigator>
      <BottomTabNavigation.Screen
        name={DASHBOARD.HOME.name}
        component={HomeDashBoard}
        options={{
          headerTitle: DASHBOARD.HOME.headerTitle,
          tabBarIcon: () => <FontAwesome6 name="house" size={25} />
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.NEWS_FEEDS.name}
        component={NewsFeedDashBoard}
        options={{
          title: DASHBOARD.NEWS_FEEDS.headerTitle,
          tabBarIcon: () => <FontAwesome6 name="newspaper" size={25} />
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.ALERTS.name}
        component={DashBoardAlerts}
        options={{
          title: DASHBOARD.ALERTS.headerTitle,
          tabBarIcon: () => <Feather name="alert-octagon" size={25} />
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.FIRST_AID.name}
        component={FirstAidDashBoard}
        options={{
          headerTitle: DASHBOARD.FIRST_AID.headerTitle,
          tabBarIcon: () => <Fontisto name="first-aid-alt" size={25} />
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.PROFILE.name}
        component={ProfileDashBoard}
        options={{
          headerTitle: DASHBOARD.PROFILE.headerTitle,
          tabBarIcon: () => <FontAwesome6 name='user-gear' size={25} />
        }}
      />
    </BottomTabNavigation.Navigator>
  );
}
