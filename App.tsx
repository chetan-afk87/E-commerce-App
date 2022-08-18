/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme, Image, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import CartImg from './src/components/cartImg';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: 'white'},
            headerBackTitleVisible: false,
            headerTintColor: 'black',
          }}>
          <Stack.Screen
            name="ShopX"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'ShopX',
              headerTitleStyle: {
                fontWeight: '400',
                fontSize: 28,
              },
              headerRight: () => <CartImg navigation={navigation} />,
              headerLeft: () => (
                <Image
                  style={styles.logo}
                  source={require('./assets/logo.png')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={() => ({
              title: 'Your Cart',
              headerTitleStyle: {fontWeight: '500', fontSize: 28},
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 50,
    marginLeft: 10,
  },
});
export default App;
