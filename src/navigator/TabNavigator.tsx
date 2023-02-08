import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {constantsTabNavigator} from '../constants/constantsTabNavigator';
import {ScreenUser} from '../screens/TeacherScreens/ScreenUser';
import { StackNavigatorMyCourses } from './StackNavigatorMyCourses';
export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
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
