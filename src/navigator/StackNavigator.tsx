import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {constantsStackLists} from '../constants/constantsStackLists';
import {ScreenStartAwesomeAttendance} from '../screens/ListsScreens/ScreenStartAwesomeAttendance';
import {ScreenStudent} from '../screens/ListsScreens/ScreenStudent';
import {globalStyles} from '../themes/global';
export const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{contentStyle: globalStyles.backgroundApp}}>
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
