import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import job from '../../job.json'
import genre from '../../genre.json'

const goToLoginScreen = (navigation) => {
  navigation.navigate('Login');
};

let loginIdR;

const RegisterScreen = ({ onRegisterSuccess }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [SelectJob, setSelectJob] = useState('');
  const [selectStyle, setSelectStyle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [erreur, setErreur] = useState(false);

  const changeTextName = (e)=>{
    setName(e)
    setErreur(false)
  }

  const changeTextEmail = (e)=>{
    setEmail(e)
    setErreur(false)
  }

  const changeTextPassword = (e)=>{
    setPassword(e)
    setErreur(false)
  }

  const changeSelectJob = (e)=>{
    setSelectJob(e)
    setErreur(false)
  }

  const changeSelectStyle = (e)=>{
    setSelectStyle(e)
    setErreur(false)
  }

  const changeTextDescription = (e)=>{
    setDescription(e)
    setErreur(false)
  }

  const changeImage = (e)=>{
    setImage(e)
    setErreur(false)
  }

  const handleRegister = async () => {
    if(email && password && name && SelectJob && description){
      try {
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password:password,
            job: SelectJob,
            genre: selectStyle,
            description: description,
            image: image,
          }),
        });
        const data = await response.json();
    if (response.ok) {
      const userResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/auth/me', {
          headers: {
              'Authorization': `Bearer ${data.authToken}`
          },
      });

      const userData = await userResponse.json();
      console.log(userData, userData.id)
      if (userResponse.ok) {
        loginIdR = userData.id
        console.log(loginIdR)
          onRegisterSuccess()
        }} else {
          const errorData = await response.json();
          console.error('Failed to update name:', errorData);
          setError('Failed to update name');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error updating name');
      }
      onRegisterSuccess();
    }
    else{
      setErreur(true)
    }
  };

  

  return (
    <ScrollView style={styles.ScrollContainer}>

    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={changeTextName}
        placeholder="Nom"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={changeTextEmail}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={changeTextPassword}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <View style={styles.inputsSelect}>
        <Text style={styles.text}>Rôle :</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectJob(value)}
          items={job.jobs}
          style={{
            inputIOS: styles.inputIOS,
            inputAndroid: styles.inputAndroid,
            iconContainer: styles.iconContainer
          }}
          placeholder={{ label: "Quel est votre rôle sur Neost ?", value: null }}
        />

        <Text style={styles.text}>Genre :</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectStyle(value)}
          items={genre.genres}
          style={{
            inputIOS: styles.inputIOS,
            inputAndroid: styles.inputAndroid,
            iconContainer: styles.iconContainer,
          }}
          placeholder={{ label: "Aucun genre pédéfini", value: null }}
        />
      </View>

      <TextInput
        style={styles.description}
        underlineColorAndroid="transparent"
        placeholder="Décrivez-vous de la façon la plus détaillée possible."
        placeholderTextColor={'#aaa'}
        numberOfLines={10}
        multiline={true}
        value={description}
        onChangeText={changeTextDescription}
      />

      <TextInput
        style={styles.description}
        underlineColorAndroid="transparent"
        placeholder="URL d'une image (pas obligatoire)"
        placeholderTextColor={'#aaa'}
        numberOfLines={10}
        multiline={true}
        value={image}
        onChangeText={changeImage}
      />
      {erreur ? (
        <Text style={styles.error}>Veuillez remplir les bonnes informations</Text>
      ):(
       <Text></Text> 
      )}
      <Pressable style={styles.signUp} onPress={handleRegister}>
        <Text style={styles.signUpText}>S'inscrire</Text>
      </Pressable>
      
      <Pressable style={styles.logIn} onPress={() => goToLoginScreen(navigation)}>
        <Text style={styles.logInText}>Se connecter</Text>
      </Pressable>
      
    </View>

    </ScrollView>


    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  ScrollContainer:{
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  input: {
    width: wp('80%'),
    borderRadius: 100,
    backgroundColor: '#333',
    height: 50,
    paddingLeft: 15,
    marginBottom: 20,
    color:'white'
  },
  inputsSelect : {
    width: '80%',
    color: 'white'
  },
  select: {
    width: '80%',
    color: 'white'
  },
  
  text: {
    color: 'white',
    marginBottom: 10,
  },
  description: {
    textAlignVertical: 'top',
    padding: '5%',
    borderRadius: 15,
    width: wp('80%'),
    height: hp('20%'),
    marginBottom: 20,
    backgroundColor: '#333',
    color: 'white'
  },
  signUp: {
    width: '80%',
    height: 40,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
  },
  logIn: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  logInText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'white'
  },
  
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 100,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#333',
    marginBottom: 20
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 100,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#333',
    marginBottom: 20
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
  error:{
    color:'red'
  }
});
export {loginIdR}
export default RegisterScreen;
