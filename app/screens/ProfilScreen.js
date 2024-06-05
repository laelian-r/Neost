import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fakeData from '../../fakeData.json';
import { loginId } from './login';
import { loginIdR } from './register'
import RNPickerSelect from 'react-native-picker-select';
import Divider from '../components/Drivers';
import { userFetch } from '../../hook/UserFetch';
import job from '../../job.json'
import genre from '../../genre.json'



const ProfilScreen = () => {
  let id;
  const navigation = useNavigation();
  const [artists, isLoading] = userFetch();
  const [artist, setArtist] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingRole, setIsEditingRole] = useState(false);
  const [isEditingGenre, setIsEditingGenre] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [error, setError] = useState(null);

  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [newDescription, setNewDescription] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        if (loginId || loginIdR) {
          if(loginId){
            id = loginId
          }
          else{
            id = loginIdR
          }
          try {
            const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/user/{user_id}');
            const data = await response.json();
            setArtist(data);
            setIsLoading(false);
  
              setNewName(data.name);
              setNewRole(data.job);
              setNewGenre(data.genre);
              setNewDescription(data.description);
          } catch (error) {
            setError(error);
          }
        }
      };
  
      fetchData();
    }, [loginId]);


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

  const handleNameSubmit = async () => {
    if (newName) {
      const updatedName = newName.trim();
      const updatedArtist = { ...artist, name: updatedName };
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/user/{user_id}', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: id,
            name: updatedName,
            email: artist.email,
            job: artist.job,
            genre: artist.genre,
            description: artist.description,
            image: artist.image,
          }),
        });

        if (response.ok) {
          const updatedData = await response.json();
          setArtist(updatedData);
          setIsEditingName(false);
        } else {
          const errorData = await response.json();
          console.error('Failed to update name:', errorData);
          setError('Failed to update name');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error updating name');
      }
    }
    else{
      setIsEditingName(false)
    }
  };


  const submitRole = async ()=>{
    if (newRole) {
      const updatedRole = newRole.trim();
      const updatedArtist = { ...artist, role: updatedRole };
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/user/{user_id}', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: id,
            name: artist.name,
            email: artist.email,
            job: updatedRole,
            genre: artist.genre,
            description: artist.description,
            image: artist.image,
          }),
        });

        if (response.ok) {
          const updatedData = await response.json();
          setArtist(updatedData);
          setIsEditingRole(false);
        } else {
          const errorData = await response.json();
          console.error('Failed to update name:', errorData);
          setError('Failed to update name');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error updating name');
      }
    }
    else{
      setIsEditingRole(false)
    }
  };

  const submitGenre = async ()=>{
    if (newGenre) {
      const updatedGenre = newGenre.trim();
      const updatedArtist = { ...artist, genre: updatedGenre };
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/user/{user_id}', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: id,
            name: artist.name,
            email: artist.email,
            job: artist.job,
            genre: updatedGenre,
            description: artist.description,
            image: artist.image,
          }),
        });

        if (response.ok) {
          const updatedData = await response.json();
          setArtist(updatedData);
          setIsEditingGenre(false);
        } else {
          const errorData = await response.json();
          console.error('Failed to update name:', errorData);
          setError('Failed to update name');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error updating name');
      }
    }
    else{
      setIsEditingGenre(false)
    }
  }

  const handleDescriptionSubmit = async () => {
    if (newDescription) {
      const updatedDescritpion = newDescription.trim();
      const updatedArtist = { ...artist, description: updatedDescritpion };
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/user/{user_id}', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: id,
            name: artist.name,
            email: artist.email,
            job: artist.job,
            genre: artist.genre,
            description: updatedDescritpion,
            image: artist.image,
          }),
        });

        if (response.ok) {
          const updatedData = await response.json();
          setArtist(updatedData);
          setIsEditingDescription(false);
        } else {
          const errorData = await response.json();
          console.error('Failed to update name:', errorData);
          setError('Failed to update name');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error updating name');
      }
    }
    else{
      setIsEditingDescription(false)
    }
  };

  return (
    <ScrollView style={styles.screen}>
      {artist ? (
        <>
          <View style={styles.test}>
          {artist.image ? (<Image
                style={styles.image}
                source={{uri : artist.image}}
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
                items={job.jobs}
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
                <Text style={styles.text}>{artist.job}</Text>
              </View>
            )}
            {isEditingGenre ? (
              <>
              <Text style={styles.label}>Genre :</Text>
              <RNPickerSelect
                onValueChange={(value) => setNewGenre(value)}
                items={genre.genres}
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
