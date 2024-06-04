import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ArtistProfile from '../components/profilArtist';
import fakeData from '../../fakeData.json';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { userFetch } from '../../hook/UserFetch';


const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectJob, setSelectJob] = useState('');
  const [selectStyle, setSelectStyle] = useState('');
  const [artists, isLoading] = userFetch()


  useEffect(() => {
    const filteredArtists = fakeData.filter(artist => {
      const jobMatch = selectJob ? artist.job === selectJob : true;
      const styleMatch = selectStyle ? artist.genre === selectStyle : true;
      const searchMatch = searchText ? 
        artist.name.toLowerCase().includes(searchText.toLowerCase()) ||
        artist.job.toLowerCase().includes(searchText.toLowerCase()) ||
        (artist.genre && artist.genre.toLowerCase().includes(searchText.toLowerCase()))
        : true;
      return jobMatch && styleMatch && searchMatch;
    });
    // setArtists(filteredArtists);
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

      <View>
        {artists.map((artist) => (
          <ArtistProfile key={artist.id} artistData={artist} />
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
