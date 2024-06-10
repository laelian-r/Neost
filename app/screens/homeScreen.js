import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ArtistProfile from '../components/profilArtist';
import fakeData from '../../fakeData.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { userFetch } from '../../hook/UserFetch';
import job from '../../job.json'
import genre from '../../genre.json'


const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectJob, setSelectJob] = useState('');
  const [selectStyle, setSelectStyle] = useState('');
  const [artists, isLoadingArtists] = userFetch()
  const [dataArtist, setDataArtist] = useState('')


  useEffect(() => {
    setDataArtist(artists);
  }, [artists]);

  useEffect(() => {
    if (artists) {
      const filteredArtists = artists.filter(artist => {
        const jobMatch = selectJob ? artist.job === selectJob : true;
        const styleMatch = selectStyle ? artist.genre === selectStyle : true;
        const searchMatch = searchText ? 
          artist.name.toLowerCase().includes(searchText.toLowerCase()) ||
          artist.job.toLowerCase().includes(searchText.toLowerCase()) ||
          (artist.genre && artist.genre.toLowerCase().includes(searchText.toLowerCase()))
          : true;
        return jobMatch && styleMatch && searchMatch;
      });
      setDataArtist(filteredArtists);
    }
  }, [selectJob, selectStyle, searchText, artists]);


  return (
    <ScrollView style={styles.screen}>
      <TextInput
        onChangeText={text => setSearchText(text)}
        value={searchText}
        style={styles.search}
        placeholder="Rechercher par nom, genre ou Rôle"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.text}>Rôle :</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectJob(value)}
        items={job.jobs}
        style={{
          inputIOS: styles.inputIOS,
          inputAndroid: styles.inputAndroid,
          iconContainer: styles.iconContainer
        }}
        placeholder={{ label: "Aucun rôle prédéfini", value: null }}
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

      <View>
        {isLoadingArtists ? (
          <Text style={styles.errText}>chargement...</Text>
        ):(
          dataArtist.map((artist) => (
            <ArtistProfile key={artist.id} artistData={artist} />
          ))
        )}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: hp('5%'),
  },
  errText: {
    color: 'white',
    textAlign: 'center',
    margin: 50
  },
  search: {
    height: 50,
    backgroundColor: '#333',
    borderRadius: 100,
    paddingLeft: 25,
    marginBottom: 25,
    color: 'white',
  },
  text: {
    color: 'white',
    marginBottom: 10,
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

export default HomeScreen;
