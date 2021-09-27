import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import AppButton from '../components/Button';
import Icon from '../components/Icon';
import Rectangle from '../components/Rectangle';

import Screen from '../components/Screen';
import TextApp from '../components/TextApp';

function NewGameScreen({ team1='Rebels', team2='Lions' }) {
  return (
    <Screen style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require('../assets/bg.jpg')}
        resizeMode='cover'
      >
      <Rectangle height='10%'>{team1}</Rectangle>

      </ImageBackground>


    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  team: {
    fontSize: 40,
    color: 'white',
  },
  start: {
    opacity: 0.6,
  }
});

export default NewGameScreen;