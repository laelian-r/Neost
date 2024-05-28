import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, StatusBar, Image, ic} from 'react-native';
import HomeScreen from './app/screens/homeScreen';
import MessageScreen from './app/screens/MessageScreen';
import ProfilScreen from './app/screens/ProfilScreen';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import * as NavigationBar from 'expo-navigation-bar';


const Tab = createBottomTabNavigator();

function App() {
  NavigationBar.setBackgroundColorAsync("#1e1e1e")

  class YourComponent extends React.Component {
    render() {
      const isActive = this.props.active || false;
      const icon = isActive
        ? require('./assets/icon-active-home.png')
        : require('./assets/icon-home.png');
  
      return (
        <Image source={icon} />
      );
    }
  }
  return (
    <>
        <StatusBar backgroundColor="#1e1e1e"/>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1e1e1e', // Couleur de fond de la barre de tabulation
          },
          tabBarActiveTintColor: '#fff', // Couleur des icônes et du texte actifs
          tabBarInactiveTintColor: '#777', // Couleur des icônes et du texte inactifs
        headerShown: false,

        }}
      >

        <Tab.Screen name="Accueil" component={HomeScreen} 
        options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={focused 
                    ? require('./assets/icon-active-home.png') 
                    : require('./assets/icon-home.png')}
                  style={{ width: 20, height: 20 }}
                />
              ),
            }} />
        <Tab.Screen name="Message" component={MessageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused 
                ? require('./assets/icon-active-messages.png') 
                : require('./assets/icon-messages.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
        />
        <Tab.Screen name="profil" component={ProfilScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused 
                ? require('./assets/icon-active-profile.png') 
                : require('./assets/icon-profile.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
        /> 
      </Tab.Navigator>
    </NavigationContainer>
    </>
    
  );
}
const styles = StyleSheet.create({
  bar:{
    backgroundColor:'#1e1e1e'
  }
});

export default App;