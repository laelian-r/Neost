import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BlurView } from '@react-native-community/blur';
import RNPickerSelect from 'react-native-picker-select';
import ArtistProfile from '../composent/artistInfo';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = useState('');
  const [selectedSport, setSelectedSport] = useState('');

  const artists = [
    {
    imageUrl: 'https://yt3.googleusercontent.com/KJdScqhPK6AQxMzUj5Vv7nPwcZvCvd14lXtTL5_IGuF7wXKNxa1c5hIDTci2m1DYBIep_3oVD44=s176-c-k-c0x00ffffff-no-rj',
    backgroundImage: 'https://yt3.googleusercontent.com/KJdScqhPK6AQxMzUj5Vv7nPwcZvCvd14lXtTL5_IGuF7wXKNxa1c5hIDTci2m1DYBIep_3oVD44=s176-c-k-c0x00ffffff-no-rj',
    name: 'Derow',
    role: 'Rappeur',
    description: 'un talentueux rappeur'
  },  
  {
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/4f/61/394f61d5-25a6-f121-a5f1-3a32e56ee02b/artwork.jpg/316x316cc.webp',
    backgroundImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/39/4f/61/394f61d5-25a6-f121-a5f1-3a32e56ee02b/artwork.jpg/316x316cc.webp',
    name: 'Artist Two',
    role: 'Singer',
    description: 'A famous singer',
  },
];

  return (
    <ScrollView style={styles.screen}>
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          style={styles.search}
          placeholder="Rechercher"
          placeholderTextColor="#1e1e1e"
        />
      <Text style={styles.text}>Genre :</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedSport(value)}
        items={[
          { label: 'Rap', value: 'Rap' },
          { label: 'Variété', value: 'Variété' },
          { label: 'Jazz', value: 'Jazz' },
          { label: 'Rock', value: 'Rock' },
          { label: 'Pop', value: 'Pop' },
          { label: 'Classique', value: 'Classique' },
          { label: 'Hip-Hop', value: 'Hip-Hop' },
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
        placeholder={{ label: 'Séléctioner un genre musical', value: null }}
      />
      <Text style={styles.text}>Quelle est la spécialité que vous cherchez ?</Text>
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
  blurContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 20,
  },
  search: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingLeft: 25,
    marginBottom: 25,
  },
  text: {
    color: '#fff',
    marginBottom: 10,
  },
  select: {
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
  },  
  artistContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  artistName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artistRole: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  artistDescription: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;