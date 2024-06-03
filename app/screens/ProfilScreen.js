import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fakeData from '../../fakeData.json';
import { loginId } from './login';
import RNPickerSelect from 'react-native-picker-select';
import Divider from '../components/Drivers';

const ProfilScreen = () => {
  const navigation = useNavigation();
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingRole, setIsEditingRole] = useState(false);
  const [isEditingGenre, setIsEditingGenre] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [newDescription, setNewDescription] = useState('');


  useEffect(() => {
    setArtists(fakeData);
  }, []);

  useEffect(() => {
    if (artists.length > 0) {
      const foundArtist = artists.find(artist => artist.id === loginId);
      setArtist(foundArtist);
      if (foundArtist) {
        setNewName(foundArtist.name);
        setNewRole(foundArtist.role);
        setNewGenre(foundArtist.genre);
        setNewDescription(foundArtist.description)
      }
    }
  }, [artists]);

  const genres = [
    'Rap', 'Variété', 'Jazz', 'Rock', 'Pop', 'Classique', 'Hip-Hop', 'Reggae', 'Electro', 'Blues',
    'Funk', 'Soul', 'Country', 'Metal', 'Indie', 'R&B', 'Techno', 'Reggaeton', 'Disco', 'Punk',
    'Gospel', 'Trance', 'Alternative', 'Chill-out', 'Ska', 'House', 'Ambient', 'Trap', 'Hardcore',
    'Dancehall', 'Bluegrass'
  ];
  const roles = [
    "Chanteur/Chanteuse", "Rappeur/Rappeuse", "Guitariste", "Bassiste", 
    "Batteur/Batteuse", "Claviériste", "Pianiste", "Violoniste", 
    "Violoncelliste", "Flûtiste", "Saxophoniste", "Trompettiste", 
    "Tromboniste", "Percussionniste", "Harmoniciste", 
    "Compositeur/Compositrice", "Arrangeur/Arrangeuse", 
    "Producteur/Productrice", "Ingénieur(e) du son", "DJ"
  ];;


  const handleNameChange = () => {
    setIsEditingName(true);
  };

  const handleRoleChange = () => {
    setIsEditingRole(true);
  };

  const handleGenreChange = () => {
    setIsEditingGenre(true);
  };

  const handleDescriptionChange = () => {
    setIsEditingDescription(true);
  };

  const handleNameSubmit = () => {
    if (artist) {
      const updatedName = newName.trim();
      const updatedArtist = { ...artist, name: updatedName };
      setArtist(updatedArtist);
      setIsEditingName(false);
    }
  };


  const submitRole = ()=>{
    if (artist) {
      const updatedRole = newRole.trim();
      const updatedArtist = { ...artist, role: updatedRole };
      setArtist(updatedArtist);
      setIsEditingRole(false);
      setNewRole(updatedRole);
    }
  }

  const submitGenre = ()=>{
    if (artist) {
      const updatedGenre = newGenre.trim();
      const updatedArtist = { ...artist, genre: updatedGenre };
      setArtist(updatedArtist);
      setIsEditingGenre(false);
      setNewGenre(updatedGenre);
    }
  }

  const handleDescriptionSubmit = () => {
    if (artist) {
      const updatedDescription = newDescription.trim();
      const updatedArtist = { ...artist, description: updatedDescription };
      setArtist(updatedArtist);
      setIsEditingDescription(false);
      setNewDescription(updatedDescription)
    }
  };

  return (
    <ScrollView style={styles.screen}>
      {artist ? (
        <>
          <View style={styles.test}>
          {artist.imageUrl ? (<Image
                style={styles.image}
                source={{uri : artist.imageUrl}}
            />):(   
                <Image
                style={styles.image}
                source={{ uri: 'https://www.logiquetechno.com/wp-content/uploads/2020/11/retirer-photo-de-profil-facebook.png' }}
            />
            )}
            {isEditingName ? (
              <TextInput
                style={styles.input}
                value={newName}
                onChangeText={setNewName}
                onBlur={handleNameSubmit}
                autoFocus
              />
            ) : (
              <View style={styles.fieldsContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Nom :</Text>
                  <Pressable onPress={handleNameChange}>
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require('../../assets/icon-pen.png')}
                    />
                  </Pressable>
                </View>
                <Text style={styles.text}>{artist.name}</Text>
              </View>
            )}
            {isEditingRole ? (
              <>
              <Text style={styles.label}>Métier :</Text>
              <RNPickerSelect
                onValueChange={(value) => setNewRole(value)}
                items={roles.map(role => ({ label: role, value: role }))}
                value={newRole}
                style={{
                  inputIOS: styles.inputIOS,
                  inputAndroid: styles.inputAndroid,
                  iconContainer: styles.iconContainer
                }}
              />
              <Pressable onPress={submitRole}>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../../assets/icon-chek.png')}
                  />
                </Pressable>
              </>

            ) : (
              <View style={styles.fieldsContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Métier :</Text>
                  <Pressable onPress={handleRoleChange}>
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require('../../assets/icon-pen.png')}
                    />
                  </Pressable>
                </View>
                <Text style={styles.text}>{artist.role}</Text>
              </View>
            )}
            {isEditingGenre ? (
              <>
              <Text style={styles.label}>Genre :</Text>
              <RNPickerSelect
                onValueChange={(value) => setNewGenre(value)}
                items={genres.map(genre => ({ label: genre, value: genre }))}
                value={newGenre}
                style={{
                  inputIOS: styles.inputIOS,
                  inputAndroid: styles.inputAndroid,
                  iconContainer: styles.iconContainer
                }}
              />

              <Pressable onPress={submitGenre}>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../../assets/icon-chek.png')}
                  />
                </Pressable>
              </>

            ) : (
              <View style={styles.fieldsContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Genre :</Text>
                  <Pressable onPress={handleGenreChange}>
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require('../../assets/icon-pen.png')}
                    />
                  </Pressable>
                </View>
                <Text style={styles.text}>{artist.genre}</Text>
              </View>
            )}

          <View style={styles.fieldsContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Description :</Text>
              <Pressable onPress={handleDescriptionChange}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../../assets/icon-pen.png')}
                />
              </Pressable>
            </View>
            {isEditingDescription ? (
              <TextInput
                style={styles.input}
                value={newDescription}
                onChangeText={setNewDescription}
                onBlur={handleDescriptionSubmit}
                autoFocus
              />
            ) : (

              <View style={styles.fieldsContainer}>
                
                <Text style={styles.text}>{artist.description}</Text>
              </View>
            )}
            

          <View>
            <Divider />
            <Divider />
          </View>
          
          </View>

          <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Followers :</Text>
            <Text style={styles.text}>{artist.followers}</Text>
          </View>

          <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Suivie :</Text>
            <Text style={styles.text}>{artist.suivie}</Text>
          </View>
          
          </View>
        </>
      ) : (
        <Text style={styles.text}>Artiste non trouvé</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingTop: hp('3%'),
    paddingRight: hp('5%'),
    paddingBottom: hp('3%'),
    paddingLeft: hp('5%'),
  },
  test: {
    paddingBottom: hp('3%')
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  fieldsContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 20,
    color: 'white'
  },
  text: {
    fontSize: 17,
    color: 'gray',
  },
  input: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  image: {
    borderRadius: 15,
    height: 300,
    width: wp('80%'),
    marginBottom: 15
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

export default ProfilScreen;
