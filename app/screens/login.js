import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fakeData from '../../fakeData.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { userFetch } from '../../hook/UserFetch';



const goToRegisterScreen = (navigation) => {
  navigation.navigate('Register');
};

let loginId;




const LoginScreen = ({ onLoginSuccess }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [artists, isLoading] = userFetch()
  const [erreur, setErreur] = useState(false);

  const changeTextEmail = (e)=>{
    setEmail(e)
    setErreur(false)
  }

  const changeTextPassword = (e)=>{
    setPassword(e)
    setErreur(false)
  }



  const handleLogin = async () => {
    if (email && password) {
             if(artists){
              const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });

        const data = await response.json();
            console.log(data)
        if (response.ok) {
          const userResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/auth/me', {
              headers: {
                  'Authorization': `Bearer ${data.authToken}`
              },
          });
  
          const userData = await userResponse.json();

          if (userResponse.ok) {
            loginId = userData.id

            onLoginSuccess()


          } else {
            alert('marche pas')
          }

             }
             else {
              setErreur(true)
            }
          }
        }
     else {
      setErreur(true)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={changeTextEmail}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        placeholderTextColor="white"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={changeTextPassword}
        placeholder="Mot de passe"
        placeholderTextColor="white"
        secureTextEntry
      />
      {erreur ? (
        <Text style={styles.error}>Veuillez remplir les bonnes informations</Text>
      ):(
       <Text></Text> 
      )}
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
    color: 'white',
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
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'white'
  },
  error:{
    color:'red'
  }
});

export {loginId}
export default LoginScreen;
