import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fakeData from '../../fakeData.json';
import { loginId } from './login';
import RNPickerSelect from 'react-native-picker-select';

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
  const roles = ["Chanteur", "Chanteuse", "Rappeur", "Rappeuse", "Guitariste", "Bassiste", "Batteur", "Batteuse", "Claviériste", "Pianiste", "Violoniste", "Violoncelliste", "Flûtiste", "Saxophoniste", "Trompettiste", "Tromboniste", "Percussionniste", "Harmoniciste", "Compositeur", "Compositrice", "Arrangeur", "Arrangeuse", "Producteur", "Productrice", "Ingénieur du son", "Ingénieure du son", "DJ"];


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
    <View style={styles.screen}>
      {artist ? (
        <>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: artist.imageUrl }}
            />
            {isEditingName ? (
              <TextInput
                style={styles.input}
                value={newName}
                onChangeText={setNewName}
                onBlur={handleNameSubmit}
                autoFocus
              />
            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{artist.name}</Text>
                <Pressable onPress={handleNameChange}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/icon-pen.png')}
                  />
                </Pressable>
              </View>
            )}
            {isEditingRole ? (
              <>
              <RNPickerSelect
                onValueChange={(value) => setNewRole(value)}
                items={roles.map(role => ({ label: role, value: role }))}
                value={newRole}
              />
              <Pressable onPress={submitRole}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/icon-chek.png')}
                  />
                </Pressable>
              </>

            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{artist.role}</Text>
                <Pressable onPress={handleRoleChange}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/icon-pen.png')}
                  />
                </Pressable>
              </View>
            )}
            {isEditingGenre ? (
              <>
              
              <RNPickerSelect
                onValueChange={(value) => setNewGenre(value)}
                items={genres.map(genre => ({ label: genre, value: genre }))}
                value={newGenre}
              />

              <Pressable onPress={submitGenre}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/icon-chek.png')}
                  />
                </Pressable>
              </>

            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{artist.genre}</Text>
                <Pressable onPress={handleGenreChange}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/icon-pen.png')}
                  />
                </Pressable>
              </View>
            )}
          </View>
          <Text style={styles.text}>Followers :</Text>
          <Text style={styles.text}>{artist.followers}</Text>

          <Text style={styles.text}>Suivie :</Text>
          <Text style={styles.text}>{artist.suivie}</Text>

          <Text style={styles.text}>Description :</Text>

          {isEditingDescription ? (
              <TextInput
                style={styles.input}
                value={newDescription}
                onChangeText={setNewDescription}
                onBlur={handleDescriptionSubmit}
                autoFocus
              />
            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{artist.description}</Text>
                <Pressable onPress={handleDescriptionChange}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/icon-pen.png')}
                  />
                </Pressable>
              </View>
            )}
        </>
      ) : (
        <Text style={styles.text}>Artiste non trouvé</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: hp('5%'),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  text: {
    color: '#fff',
  },
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});

export default ProfilScreen;
