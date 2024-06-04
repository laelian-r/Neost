import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';


const DetailArtiste = ({ route }) => {

  const { artistData } = route.params;
  const [newFollowers, setNewFollowers] = useState('')
  const [isFollowing, setIsFollowing] = useState(false);


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
  };
    
  return (
    <View style={styles.container}>
      {artistData.imageUrl ? (<Image
                style={styles.image}
                source={{uri : artistData.imageUrl}}
            />):(
                <Image
                style={styles.image}
                source={{ uri: 'https://www.logiquetechno.com/wp-content/uploads/2020/11/retirer-photo-de-profil-facebook.png' }}
            />
            )}
      <Image
        style={styles.backgroundImage}
        source={{ uri: artistData.backgroundImage }}
      />
      <Text style={styles.name}>{artistData.name}</Text>
      <Text style={styles.role}>{artistData.job}</Text>
      <Text style={styles.description}>{artistData.description}</Text>
      <Text style={styles.role}>followers : {newFollowers} </Text>
      <Text style={styles.role}>suivie : {artistData.suivie} </Text>
      
      <Pressable onPress={toggleFollow} style={styles.button}>
        <Text style={styles.buttonText}>{isFollowing ? 'Ne plus suivre' : 'Suivre'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    backgroundColor: '#1e1e1e',
    alignItems: 'center'
  },
  imageContainer: {
      alignItems: 'center',
      borderRadius: 15
  },
  image: {
      borderRadius: 15,
      height: 300,
      width: 310
  },
  restContainer: {
      padding: 20,
  },
  name: {
      color: '#b2b9c1',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 5,
      textAlign: 'start',
  },
  role: {
      fontSize: 15,
      color: '#b2b9c1',
      marginTop: 2,
      textAlign: 'start',
      fontWeight: 'bold',
  },
  description: {
      fontSize: 14,
      marginTop: 2,
      textAlign: 'start',
      color: 'gray'
  }
});

export default DetailArtiste;
