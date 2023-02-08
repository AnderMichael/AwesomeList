import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {constantsStackLists} from '../constants/constantsStackLists';
import {ScreenStartAwesomeAttendance} from '../screens/ListsScreens/ScreenStartAwesomeAttendance';
import {ScreenStudent} from '../screens/ListsScreens/ScreenStudent';
import {ScreenMyCourses} from '../screens/TeacherScreens/ScreenMyCourses';
import {globalStyles} from '../themes/global';
export const StackNavigatorMyCourses = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: globalStyles.backgroundApp,
        headerShown: false,
      }}>
      <Stack.Screen
        name={constantsStackLists.myCourses.screen}
        component={ScreenMyCourses}
      />
      <Stack.Screen
        name={constantsStackLists.start.screen}
        component={ScreenStartAwesomeAttendance}
      />
      <Stack.Screen
        name={constantsStackLists.students.screen}
        component={ScreenStudent}
      />
    </Stack.Navigator>
  );
};
