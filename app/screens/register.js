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
        <Text style={styles.text}>Métier :</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectJob(value)}
          items={[
            { label: 'Arrangeur/Arrangeuse', value: 'Arrangeur/Arrangeuse' },
            { label: 'Bassiste', value: 'Bassiste' },
            { label: 'Batteur/Batteuse', value: 'Batteur/Batteuse' },
            { label: 'Chanteur/Chanteuse', value: 'Chanteur/Chanteuse' },
            { label: 'Claviériste', value: 'Claviériste' },
            { label: 'Compositeur/Compositrice', value: 'Compositeur/Compositrice' },
            { label: 'DJ', value: 'DJ' },
            { label: 'Flûtiste', value: 'Flûtiste' },
            { label: 'Guitariste', value: 'Guitariste' },
            { label: 'Harmoniciste', value: 'Harmoniciste' },
            { label: 'Ingénieur(e) du son', value: 'Ingénieur(e) du son' },
            { label: 'Pianiste', value: 'Pianiste' },
            { label: 'Percussionniste', value: 'Percussionniste' },
            { label: 'Producteur/Productrice', value: 'Producteur/Productrice' },
            { label: 'Rappeur/Rappeuse', value: 'Rappeur/Rappeuse' },
            { label: 'Saxophoniste', value: 'Saxophoniste' },
            { label: 'Tromboniste', value: 'Tromboniste' },
            { label: 'Trompettiste', value: 'Trompettiste' },
            { label: 'Violoncelliste', value: 'Violoncelliste' },
            { label: 'Violoniste', value: 'Violoniste' }
          ]}
          style={{
            inputIOS: styles.inputIOS,
            inputAndroid: styles.inputAndroid,
            iconContainer: styles.iconContainer
          }}
          placeholder={{ label: "Aucun métier prédéfini", value: null }}
        />

        <Text style={styles.text}>Genre :</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectStyle(value)}
          items={[
            { label: 'Alternative', value: 'Alternative' },
            { label: 'Ambient', value: 'Ambient' },
            { label: 'Bluegrass', value: 'Bluegrass' },
            { label: 'Blues', value: 'Blues' },
            { label: 'Chill-out', value: 'Chill-out' },
            { label: 'Classique', value: 'Classique' },
            { label: 'Country', value: 'Country' },
            { label: 'Dancehall', value: 'Dancehall' },
            { label: 'Disco', value: 'Disco' },
            { label: 'Electro', value: 'Electro' },
            { label: 'Funk', value: 'Funk' },
            { label: 'Gospel', value: 'Gospel' },
            { label: 'Hardcore', value: 'Hardcore' },
            { label: 'Hip-Hop/Rap', value: 'Hip-Hop/Rap' },
            { label: 'House', value: 'House' },
            { label: 'Indie', value: 'Indie' },
            { label: 'Jazz', value: 'Jazz' },
            { label: 'Metal', value: 'Metal' },
            { label: 'Pop', value: 'Pop' },
            { label: 'Posé', value: 'Posé' },
            { label: 'Punk', value: 'Punk' },
            { label: 'R&B', value: 'R&B' },
            { label: 'Reggae', value: 'Reggae' },
            { label: 'Reggaeton', value: 'Reggaeton' },
            { label: 'Rock', value: 'Rock' },
            { label: 'Ska', value: 'Ska' },
            { label: 'Soul', value: 'Soul' },
            { label: 'Techno', value: 'Techno' },
            { label: 'Trance', value: 'Trance' },
            { label: 'Trap', value: 'Trap' },
            { label: 'Variété', value: 'Variété' }
          ]}
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

export default RegisterScreen;
