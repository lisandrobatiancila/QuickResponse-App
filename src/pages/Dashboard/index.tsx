import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardAlerts from './Alerts';
import {DASHBOARD} from '../../constants/string';
import HomeDashBoard from './Home';
import FirstAidDashBoard from './FirstAids';
import ProfileDashBoard from './Profile';
import NewsFeedDashBoard from './NewsFeed';

const BottomTabNavigation = createBottomTabNavigator();

export default function DashBoard() {
  return (
    <BottomTabNavigation.Navigator>
      <BottomTabNavigation.Screen
        name={DASHBOARD.HOME.name}
        component={HomeDashBoard}
        options={{
          headerTitle: DASHBOARD.HOME.headerTitle,
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.NEWS_FEEDS.name}
        component={NewsFeedDashBoard}
        options={{
          title: DASHBOARD.NEWS_FEEDS.headerTitle,
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.ALERTS.name}
        component={DashBoardAlerts}
        options={{
          title: DASHBOARD.ALERTS.headerTitle,
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.FIRST_AID.name}
        component={FirstAidDashBoard}
        options={{
          headerTitle: DASHBOARD.FIRST_AID.headerTitle,
        }}
      />
      <BottomTabNavigation.Screen
        name={DASHBOARD.PROFILE.name}
        component={ProfileDashBoard}
        options={{
          headerTitle: DASHBOARD.PROFILE.headerTitle,
        }}
      />
    </BottomTabNavigation.Navigator>
  );
}
