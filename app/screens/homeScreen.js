import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ArtistProfile from '../composent/artistInfo';
import fakeData from '../../fakeData.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectJob, setSelectJob] = useState('');
  const [selectStyle, setSelectStyle] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists(fakeData);
  }, []);

  useEffect(() => {
    const filteredArtists = fakeData.filter(artist => {
      const jobMatch = selectJob ? artist.role === selectJob : true;
      const styleMatch = selectStyle ? artist.genre === selectStyle : true;
      const searchMatch = searchText ? 
        artist.name.toLowerCase().includes(searchText.toLowerCase()) ||
        artist.role.toLowerCase().includes(searchText.toLowerCase()) ||
        (artist.genre && artist.genre.toLowerCase().includes(searchText.toLowerCase()))
        : true;
      return jobMatch && styleMatch && searchMatch;
    });
    setArtists(filteredArtists);
  }, [selectJob, selectStyle, searchText]);

  return (
    <ScrollView style={styles.screen}>
      <TextInput
        onChangeText={text => setSearchText(text)}
        value={searchText}
        style={styles.search}
        placeholder="Rechercher par nom, genre ou métier"
        placeholderTextColor="#aaa"
      />

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

      <View>
        {artists.map((artist, index) => (
          <ArtistProfile key={index} artistData={artist} />
        ))}
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
  search: {
    height: 50,
    backgroundColor: '#333',
    borderRadius: 100,
    paddingLeft: 25,
    marginBottom: 25,
    color: '#fff',
  },
  
  text: {
    color: '#fff',
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
