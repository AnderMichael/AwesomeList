/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// TODO: Crear la funcionalidad principal, pantalla de ida y vuelta hasta terminar, marcar y desmarcar

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {Home} from './src/components/Home';
import {StackNavigatorMyCourses} from './src/navigator/StackNavigatorMyCourses';
import {configureStore} from './src/store/configureStore';
const App = () => {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
