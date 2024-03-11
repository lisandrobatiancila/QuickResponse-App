import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { COLOR_LISTS } from './colors';

export const DASHBOARD = {
  HOME: {
    name: 'Home',
    headerTitle: 'Home',
    tabBarIcon: <FontAwesome6 name="house" size={25} color={COLOR_LISTS.RED_500} />,
  },
  NEWS_FEEDS: {
    name: 'NewsFeed',
    headerTitle: 'News Feed',
    tabBarIcon: <FontAwesome6 name="newspaper" size={25} color={COLOR_LISTS.YELLOW_600} />,
  },
  ALERTS: {
    name: 'Alerts',
    headerTitle: 'Alerts',
    tabBarIcon: <Feather name="alert-octagon" size={25} color={COLOR_LISTS.AMBER_400} />,
  },
  FIRST_AID: {
    name: 'First Aid',
    headerTitle: 'First Aid',
    tabBarIcon: <Fontisto name="first-aid-alt" size={25} color={COLOR_LISTS.RED} />,
  },
  PROFILE: {
    name: 'Profile',
    headerTitle: 'Profile',
    tabBarIcon: <FontAwesome6 name='user-gear' size={25} color={COLOR_LISTS.BLUE_400} />,
  },
};

export enum TextAlignmentEnum {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
  AUTO = 'auto',
  JUSTIFY = 'justify'
}
