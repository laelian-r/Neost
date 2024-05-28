import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const ArtistProfile = ({ artistData }) => {
    const navigation = useNavigation();
    const [artistInfo, setArtistInfo] = useState({
        imageUrl: '',
        backgroundImage: '',
        name: '',
        role: '',
        description: ''
    });

    useEffect(() => {
        if (artistData) {
            setArtistInfo(artistData);
        }
    }, [artistData]);

    const navigateToProfile = () => {
        // Remplacez 'Profile' par le nom de votre écran de profil
        navigation.navigate('autreProfil', { artistData: artistData });
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: artistInfo.imageUrl }}
              />
              <Image
                style={styles.backgroundImage}
                source={{ uri: artistInfo.backgroundImage }}
                blurRadius={5}
              />
            </View>
            <View style={styles.restContainer}>
                <Text style={styles.name}>{artistInfo.name}</Text>
                <Text style={styles.role}>{artistInfo.role}</Text>
                <Text style={styles.description}>{artistInfo.description}</Text>
                <TouchableOpacity onPress={navigateToProfile} style={styles.button}>
                    <Text style={styles.buttonText}>Voir plus</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'start',
        marginTop: 10,
        marginBottom: 50,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
    },
    imageContainer: {
        alignItems: 'center',
    },
    backgroundImage: {
      flex: 1,
      width: 1000,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 15,
        marginTop: '150',
        marginBottom: '150',
    },
    restContainer: {
        padding: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'start',
    },
    role: {
        fontSize: 16,
        color: 'gray',
        marginTop: 2,
        textAlign: 'start',
    },
    description: {
        fontSize: 14,
        marginTop: 2,
        textAlign: 'start',
    },
    button: {
        backgroundColor: '#1e1e1e',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ArtistProfile;
