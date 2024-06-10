import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DetailArtiste = ({ route }) => {
  const { artistData } = route.params;
  const [newFollowers, setNewFollowers] = useState('');
  const [isFollowing, setIsFollowing] = useState(false);
  const [iconSource, setIconSource] = useState(require('../../assets/bell.png'));

  useEffect(() => {
    if (artistData) {
      setNewFollowers(artistData.followers);
    }
  }, [artistData]);

  const toggleFollow = () => {
    setNewFollowers((prevFollowers) => {
      const updatedFollowers = isFollowing ? prevFollowers - 1 : prevFollowers + 1;
      return updatedFollowers;
    });
    setIsFollowing(!isFollowing);
    setIconSource(isFollowing ? require('../../assets/bell.png') : require('../../assets/bell-active.png'));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {artistData.image ? (
          <Image
            style={styles.image}
            source={{ uri: artistData.image }}
          />
        ) : (
          <Image
            style={styles.image}
            source={{ uri: 'https://www.logiquetechno.com/wp-content/uploads/2020/11/retirer-photo-de-profil-facebook.png' }}
          />
        )}
        <View style={styles.imageNameContainer}>
          <Image
            style={styles.backgroundImage}
            source={{ uri: artistData.backgroundImage }}
          />
          <Text style={styles.name}>{artistData.name}</Text>
        </View>

        <View>
          <View style={styles.views}>
            <Text style={styles.title}>Rôle:</Text>
            <Text style={styles.role}>{artistData.job}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.title}>Genre:</Text>
            <Text style={styles.genre}>{artistData.genre}</Text>
          </View>
          <View style={styles.views}>
            <Text style={styles.title}>Description:</Text>
            <Text style={styles.description}>{artistData.description}</Text>
          </View>
        </View>
        
        <Pressable onPress={toggleFollow} style={styles.button}>
          <Text style={styles.subscribe}>{isFollowing ? 'Ne plus suivre' : `S'abonner à ${artistData.name}`}</Text>
          <Image
            source={iconSource}
            style={styles.icon}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'start',
    backgroundColor: '#1e1e1e',
    paddingTop: 15,
    paddingRight: 35,
    paddingLeft: 35,
    height: hp('100%')
  },
  image: {
    borderRadius: 15,
    height: 300,
    width: 310
  },
  imageNameContainer: {
    marginBottom: 25
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15
  },
  views: {
    marginBottom: 15
  },
  title: {
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 17
  },
  role: {
    fontSize: 15,
    color: 'gray',
    marginTop: 2
  },
  genre: {
    fontSize: 15,
    color: 'gray',
    marginTop: 2
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 2
  },
  button: {
    flexDirection: 'row',
    color: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'grey',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 13,
    paddingRight: 20,
    paddingBottom: 13,
    paddingLeft: 20,
    borderRadius: 100,
    margin: 25
  },
  subscribe: {
    color: 'white'
  },
  icon: {
    width: 20,  // Adjust width as needed
    height: 20, // Adjust height as needed
    marginLeft: 8, // Adjust space between text and image as needed
  }
});

export default DetailArtiste;
