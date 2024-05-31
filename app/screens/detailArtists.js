import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const DetailArtiste = ({ route }) => {

  const { artistData } = route.params;
  const [newFollowers, setNewFollowers] = useState('')


  useEffect(() => {
      if (foundArtist) {
        setNewFollowers(artistData.followers);
      }
    })

  const follow = ()=>{

  }
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
      <Text style={styles.role}>{artistData.role}</Text>
      <Text style={styles.description}>{artistData.description}</Text>
      <Text style={styles.role}>followers : {artistData.followers} </Text>
      <Text style={styles.role}>suivie : {artistData.suivie} </Text>
      <Pressable onPress={follow} style={styles.button}>
        <Text style={styles.buttonText}>suivres</Text>
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
