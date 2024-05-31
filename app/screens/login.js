import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fakeData from '../../fakeData.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const goToRegisterScreen = (navigation) => {
  navigation.navigate('Register');
};

let loginId;

const LoginScreen = ({ onLoginSuccess }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists(fakeData);
  }, []);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('id', value)
      console.log(value)
    } catch (e) {
      console.log(e)
    }
  }


  const handleLogin = () => {
    if (email && password) {
        artists.map((artist) => {
             if(artist.email === email && artist.password ===password){
                  loginId = artist.id
                
                onLoginSuccess()
             }
        })
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        placeholderTextColor="#fff"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        placeholderTextColor="#fff"
        secureTextEntry
      />

      <Pressable style={styles.logIn} onPress={handleLogin}>
        <Text style={styles.logInText}>Se connecter</Text>
      </Pressable>

      <Pressable style={styles.signUp} onPress={() => goToRegisterScreen(navigation)}>
        <Text style={styles.signUpText}>S'inscrire</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#333',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'white',
  },
  logIn: {
    width: '80%',
    height: 40,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  logInText: {
    color: '#fff',
    fontSize: 16,
  },
  signUp: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'white'
  },
});

export {loginId}
export default LoginScreen;
