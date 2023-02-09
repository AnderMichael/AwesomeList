import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colorsApp } from '../constants/colorsApp';
import {constantsTabNavigator} from '../constants/constantsTabNavigator';
import {ScreenUser} from '../screens/TeacherScreens/ScreenUser';
import { StackNavigatorMyCourses } from './StackNavigatorMyCourses';
import Icon from 'react-native-vector-icons/Ionicons'
export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const giveIconTab = (nameScreenTab: string, color: string) => {
    return <Icon name={myMap.get(nameScreenTab)} size={20} color={color} />;
  };

  const myMap = new Map<string, any>([
    [
      constantsTabNavigator.myCourses.tab,
      constantsTabNavigator.myCourses.icon,
    ],
    [
      constantsTabNavigator.user.tab,
      constantsTabNavigator.user.icon,
    ],
  ]);
 

  return (
    <Tab.Navigator screenOptions={({route}) => {
      let nameScreenTab = route.name;
      return {
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorsApp.RED_COLOR,
          height: 50,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        },
        tabBarLabelStyle: {
          fontFamily: 'JosefinSans-Bold',
          marginBottom: 5,
        },
        tabBarIcon: ({color}) => {
          return giveIconTab(nameScreenTab, color);
        },
        tabBarInactiveTintColor: colorsApp.GRAY_COLOR,
        tabBarActiveTintColor: colorsApp.BROWN_COLOR,
      };
    }}>
      <Tab.Screen
        name={constantsTabNavigator.myCourses.tab}
        component={StackNavigatorMyCourses}
        options={{title: constantsTabNavigator.myCourses.title}}
      />
      <Tab.Screen
        name={constantsTabNavigator.user.tab}
        component={ScreenUser}
        options={{title: constantsTabNavigator.user.title}}
      />
    </Tab.Navigator>
  );
};
