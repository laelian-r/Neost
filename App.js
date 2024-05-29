import * as React from 'react';
import { Button, Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/homeScreen';
import DetailArtiste from './app/screens/DetailArtists';
import ProfilScreen from './app/screens/ProfilScreen';
import MessageScreen from './app/screens/MessageScreen';
import * as NavigationBar from 'expo-navigation-bar';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="DetailArtiste" component={DetailArtiste} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

export default function App() {
  NavigationBar.setBackgroundColorAsync("#1e1e1e")
  return (
    <>
    <StatusBar backgroundColor="#1e1e1e"/>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#1e1e1e', // Couleur de fond de la barre de tabulation
      },
      tabBarActiveTintColor: '#fff', // Couleur des icônes et du texte actifs
      tabBarInactiveTintColor: '#777', // Couleur des icônes et du texte inactifs
      headerShown: false,

    }}>
        <Tab.Screen name="Accueil" component={HomeStackScreen}  options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={focused 
                    ? require('./assets/icon-active-home.png') 
                    : require('./assets/icon-home.png')}
                  style={{ width: 30, height: 30 }}
                />
              ),
              tabBarShowLabel: false
            }}/>
        <Tab.Screen name="message" component={MessageScreen}  options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused 
                ? require('./assets/icon-active-messages.png') 
                : require('./assets/icon-messages.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
          tabBarShowLabel: false
        }}/>
        <Tab.Screen name="profile" component={ProfilScreen} options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused 
                ? require('./assets/icon-active-profile.png') 
                : require('./assets/icon-profile.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
          tabBarShowLabel: false
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  bar:{
    backgroundColor:'#1e1e1e',
    marginTop: 50,
  }
});