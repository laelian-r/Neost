import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fakeData from '../../fakeData.json';

const ProfilScreen = () => {
  const navigation = useNavigation();
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingRole, setIsEditingRole] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    setArtists(fakeData);
  }, []);

  useEffect(() => {
    if (artists.length > 0) {
      const foundArtist = artists.find(artist => artist.id === 1);
      setArtist(foundArtist);
      if (foundArtist) {
        setNewName(foundArtist.name);
        setNewRole(foundArtist.role);
      }
    }
  }, [artists]);

  const handleNameChange = () => {
    setIsEditingName(true);
  };

  const handleRoleChange = () => {
    setIsEditingRole(true);
  };

  const handleNameSubmit = () => {
    if (artist) {
      const updatedName = newName.trim(); // Supprimer les espaces inutiles
      const updatedArtist = { ...artist, name: updatedName };
      setArtist(updatedArtist);
      setIsEditingName(false);
      setNewName(updatedArtist)
    }
  };

  const handleRoleSubmit = () => {
    if (artist) {
      const updatedRole = newRole.trim(); // Supprimer les espaces inutiles
      const updatedArtist = { ...artist, role: updatedRole };
      setArtist(updatedArtist);
      setIsEditingRole(false);
      setNewRole(updatedRole);
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
                <TouchableOpacity onPress={handleNameChange}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/iconCrayon.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
            {isEditingRole ? (
              <TextInput
                style={styles.input}
                value={newRole}
                onChangeText={setNewRole}
                onBlur={handleRoleSubmit}
                autoFocus
              />
            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{artist.role}</Text>
                <TouchableOpacity onPress={handleRoleChange}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/iconCrayon.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>

          <Text style={styles.text}>Followers :</Text>
          <Text style={styles.text}>{artist.followers}</Text>

          <Text style={styles.text}>Suivie :</Text>
          <Text style={styles.text}>{artist.suivie}</Text>
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
    justifyContent:'space-between',
    marginBottom:10
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
