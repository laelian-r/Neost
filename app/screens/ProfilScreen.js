import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fakeData from '../../fakeData.json';

const ProfilScreen = () => {
  const navigation = useNavigation();
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    setArtists(fakeData);
  }, []);

  useEffect(() => {
    if (artists.length > 0) {
      const foundArtist = artists.find(artist => artist.id === 1);
      setArtist(foundArtist);
    }
  }, [artists]);

  return (
    <View style={styles.screen}>
      {artist ? (
        <>
          <View>

            <Image
              style={{width:100, height:100}}
              source={{ uri: artist.imageUrl }}
            />

            <Text style={styles.text}>{artist.name}</Text>
            <Text style={styles.text}>{artist.role}</Text>

          </View>
          
          <Text style={styles.text}>Followers :</Text>
          <Text style={styles.text}>{artist.followers}</Text>

          <Text style={styles.text}>suivie :</Text>
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
  text: {
    color: '#fff',
  },
});

export default ProfilScreen;
