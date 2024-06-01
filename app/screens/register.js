import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const goToLoginScreen = (navigation) => {
  navigation.navigate('Login');
};

const RegisterScreen = ({ onRegisterSuccess }) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [SelectJob, setSelectJob] = useState('');
  const [selectStyle, setSelectStyle] = useState('');
  const [description, setDescription] = useState('');


  const handleRegister = () => {
    if(email && password && name && SelectJob && description){
      const newArtist = {
        id:1,
        email:email,
        password:toString(password),
        imageUrl:"",
        name:name,
        role:SelectJob,
        description:description,
        followers:0,
        suivie:0,
        genre:"",
      }
      onRegisterSuccess();
    }
    else{
        alert('Veuillez remplir tous les champs.');
    }
  };

  

  return (
    <ScrollView style={styles.ScrollContainer}>

<View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nom"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <View style={styles.inputsSelect}>
      <Text style={styles.text}>Genre :</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectStyle(value)}
        items={[
          { label: 'Variété', value: 'Variété' },
          { label: 'Jazz', value: 'Jazz' },
          { label: 'Rock', value: 'Rock' },
          { label: 'Pop', value: 'Pop' },
          { label: 'Classique', value: 'Classique' },
          { label: 'Rap', value: 'Hip-Hop/Rap' },
          { label: 'Reggae', value: 'Reggae' },
          { label: 'Electro', value: 'Electro' },
          { label: 'Blues', value: 'Blues' },
          { label: 'Funk', value: 'Funk' },
          { label: 'Soul', value: 'Soul' },
          { label: 'Country', value: 'Country' },
          { label: 'Metal', value: 'Metal' },
          { label: 'Indie', value: 'Indie' },
          { label: 'R&B', value: 'R&B' },
          { label: 'Techno', value: 'Techno' },
          { label: 'Reggaeton', value: 'Reggaeton' },
          { label: 'Disco', value: 'Disco' },
          { label: 'Punk', value: 'Punk' },
          { label: 'Gospel', value: 'Gospel' },
          { label: 'Trance', value: 'Trance' },
          { label: 'Alternative', value: 'Alternative' },
          { label: 'Chill-out', value: 'Chill-out' },
          { label: 'Ska', value: 'Ska' },
          { label: 'House', value: 'House' },
          { label: 'Ambient', value: 'Ambient' },
          { label: 'Trap', value: 'Trap' },
          { label: 'Hardcore', value: 'Hardcore' },
          { label: 'Dancehall', value: 'Dancehall' },
          { label: 'Bluegrass', value: 'Bluegrass' },
        ]}
        style={{
          inputIOS: styles.inputIOS,
          inputAndroid: styles.inputAndroid,
          iconContainer: styles.iconContainer,
        }}
        placeholder={{ label: "Aucun genre pédéfini", value: null }}
      />

      <Text style={styles.text}>Métier :</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectJob(value)}
        items={[
          { label: 'Chanteur/Chanteuse', value: 'Chanteur/Chanteuse' },
          { label: 'Rappeur/Rappeuse', value: 'Rappeur/Rappeuse' },
          { label: 'Guitariste', value: 'Guitariste' },
          { label: 'Bassiste', value: 'Bassiste' },
          { label: 'Batteur/Batteuse', value: 'Batteur/Batteuse' },
          { label: 'Claviériste', value: 'Claviériste' },
          { label: 'Pianiste', value: 'Pianiste' },
          { label: 'Violoniste', value: 'Violoniste' },
          { label: 'Violoncelliste', value: 'Violoncelliste' },
          { label: 'Flûtiste', value: 'Flûtiste' },
          { label: 'Saxophoniste', value: 'Saxophoniste' },
          { label: 'Trompettiste', value: 'Trompettiste' },
          { label: 'Tromboniste', value: 'Tromboniste' },
          { label: 'Percussionniste', value: 'Percussionniste' },
          { label: 'Harmoniciste', value: 'Harmoniciste' },
          { label: 'Compositeur/Compositrice', value: 'Compositeur/Compositrice' },
          { label: 'Arrangeur/Arrangeuse', value: 'Arrangeur/Arrangeuse' },
          { label: 'Producteur/Productrice', value: 'Producteur/Productrice' },
          { label: 'Ingénieur(e) du son', value: 'Ingénieur(e) du son' },
          { label: 'DJ', value: 'DJ' }
        ]}
        style={{
          inputIOS: styles.inputIOS,
          inputAndroid: styles.inputAndroid,
          iconContainer: styles.iconContainer
        }}
        placeholder={{ label: "Sélectionner un métier", value: null }}
      />
      </View>

      <TextInput
        style={styles.description}
        underlineColorAndroid="transparent"
        placeholder="Décrivez votre univers musical"
        placeholderTextColor={'#aaa'}
        numberOfLines={10}
        multiline={true}
        value={description}
        onChangeText={setDescription}
      />

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
    color: '#fff',
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
    color: '#fff'
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
    color: '#fff',
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
    color: '#fff',
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
  }
});

export default RegisterScreen;
