import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text>écran Message</Text>
    </View>
  );
};
const styles = StyleSheet.create({
        screen:{

        },
  });
export default MessageScreen;
