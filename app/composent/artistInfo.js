import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
        navigation.navigate('DetailArtiste', { artistData: artistData });
    };

    return (
        <View style={styles.container} blurRadius={5}>
            <View style={styles.imageContainer}>
            {artistInfo.imageUrl ? (<Image
                style={styles.image}
                source={{ uri: artistInfo.imageUrl }}
                // blurRadius={10}
            />):(
                <Image
                style={styles.image}
                source={{ uri: 'https://www.logiquetechno.com/wp-content/uploads/2020/11/retirer-photo-de-profil-facebook.png' }}
                // blurRadius={10}
            />
            )}
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
        borderRadius: 15,
        backgroundColor: '#333',
    },
    imageContainer: {
        alignItems: 'center',
        borderRadius: 15
    },
    image: {
        borderRadius: 15,
        height: 300,
        width: wp('80%')
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
    },
    button: {
        backgroundColor: '#333',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 7,
        paddingHorizontal: 7,
        marginTop: 20,
        width: 130,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ArtistProfile;
