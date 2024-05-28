import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ProfilScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Ecran profile</Text>
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
