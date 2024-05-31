import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const RegisterScreen = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedSport, setSelectedSport] = useState('');


  const handleRegister = () => {
    if(email && password && name && selectedSport){
    onRegisterSuccess();
    }
    else{
        alert('Veuillez remplir tous les champs.');
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
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
      
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nom"
        placeholderTextColor="#fff"
      />

<Text style={{color:'white'}}>Métier</Text>
      <RNPickerSelect
        style={styles.select}
        onValueChange={(value) => setSelectedSport(value)}
        items={[
          { label: 'Chanteur', value: 'Chanteur' },
          { label: 'Rappeur', value: 'Rappeur' },
          { label: 'Guitariste', value: 'Guitariste' },
          { label: 'Bassiste', value: 'Bassiste' },
          { label: 'Batteur', value: 'Batteur' },
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
          { label: 'Compositeur', value: 'Compositeur' },
          { label: 'Arrangeur', value: 'Arrangeur' },
          { label: 'Producteur', value: 'Producteur' },
          { label: 'Ingénieur du son', value: 'Ingénieur du son' },
          { label: 'DJ', value: 'DJ' },
        ]}
        placeholder={{ label: 'Séléctioner un métier', value: null }}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      
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
    color:'white'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color:'white'
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegisterScreen;
