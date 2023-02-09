import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {constantsStackLogin} from '../constants/constantsStackLogin';
import {ScreenLogin} from '../screens/LoginScreens/ScreenLogin';
import {useSelector} from 'react-redux';
import { TabNavigator } from './TabNavigator';

export const StackNavigatorLogin = () => {
  const Stack = createNativeStackNavigator();
  const {isLogin: login} = useSelector(store => store.userAuth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {login ? (
        <Stack.Screen
          name={constantsStackLogin.main.title}
          component={TabNavigator}
        />
      ) : (
        <Stack.Screen
          name={constantsStackLogin.login.title}
          component={ScreenLogin}
        />
      )}
    </Stack.Navigator>
  );
};
