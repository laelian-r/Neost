import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './app/screens/homeScreen';
import DetailArtiste from './app/screens/detailArtists';
import ProfilScreen from './app/screens/ProfilScreen';
import MessageScreen from './app/screens/MessageScreen';
import RegisterScreen from './app/screens/register';
import LoginScreen from './app/screens/login';
import { supabase } from './hook/UserFetch';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'react-native';

console.log(supabase)

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = ({ setIsAuthenticated }) => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="Register"
        component={() => (
          <RegisterScreen onRegisterSuccess={() => setIsAuthenticated(true)} />
        )}
      />
    </AuthStack.Navigator>
  );
};

const LoginStack = createNativeStackNavigator();

const LoginStackScreen = ({ setIsLogin, setIsAuthenticated }) => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen
        name="Login"
        component={() => (
          <LoginScreen onLoginSuccess={() => setIsLogin(true)} />
        )}
      />
      <LoginStack.Screen
      name="Register"
      component={() => (
        <RegisterScreen onRegisterSuccess={() => setIsAuthenticated(true)} />
      )}
      />
    </LoginStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="DetailArtiste" component={DetailArtiste} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  NavigationBar.setBackgroundColorAsync("#1e1e1e")
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);

  return (

    <>
        <StatusBar
        backgroundColor="#1e1e1e"
      />
    <NavigationContainer>
      {isLogin || isAuthenticated ? (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#1e1e1e' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#777',
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Accueil"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require('./assets/icon-active-home.png')
                      : require('./assets/icon-home.png')
                  }
                  style={{ width: 25, height: 25 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="message"
            component={MessageScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require('./assets/icon-active-messages.png')
                      : require('./assets/icon-messages.png')
                  }
                  style={{ width: 25, height: 25 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="profile"
            component={ProfilScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require('./assets/icon-active-profile.png')
                      : require('./assets/icon-profile.png')
                  }
                  style={{ width: 25, height: 25 }}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      ) : (
        <LoginStackScreen setIsLogin={setIsLogin} setIsAuthenticated={setIsAuthenticated} />

      )}
      
    </NavigationContainer>
    </>
  
  );
}
