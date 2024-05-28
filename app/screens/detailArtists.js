import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const detailArtiste = ({ route }) => {
  const { artistData } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: artistData.imageUrl }}
      />
      <Image
        style={styles.backgroundImage}
        source={{ uri: artistData.backgroundImage }}
      />
      <Text style={styles.name}>{artistData.name}</Text>
      <Text style={styles.role}>{artistData.role}</Text>
      <Text style={styles.description}>{artistData.description}</Text>
      {/* Ajoutez plus d'informations sur l'artiste ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  role: {
    fontSize: 20,
    color: 'gray',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default detailArtiste;
