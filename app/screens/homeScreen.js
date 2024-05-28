import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = useState('');


  return (
    <View style={styles.screen}>

      <Text style={styles.text}>écran d'accueil</Text>

      <TextInput
    
          onChangeText={onChangeNumber}
          value={number}
          placeholder="recherche"
        />
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
export default HomeScreen;
