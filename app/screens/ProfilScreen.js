import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text>écran profil</Text>
    </View>
  );
};
const styles = StyleSheet.create({
        screen:{

        },
  });
export default ProfilScreen;
