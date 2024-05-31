import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fakeData from '../../fakeData.json'
import AsyncStorage from '@react-native-async-storage/async-storage';

const goToRegisterScreen = (navigation) => {
  navigation.navigate('Register');
};

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
                storeData(toString(artist.id))
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
      
      <Pressable style={styles.button} onPress={() => goToRegisterScreen(navigation)}>
        <Text style={styles.buttonText}>Si vous n'avez pas de compte</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
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
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
