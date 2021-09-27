import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from './Icon';
import StopWatch from './StopWatch';
import TextApp from './TextApp';

function AlertWindow({ team='Titanides' }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        resizeMode='cover'
        style={styles.bg}
      >
      <View style={styles.head}>
        <TextApp style={styles.headerText}>{team}</TextApp>
        <TouchableOpacity onPress={console.log('pressed')}>
      <Icon name='close-circle-outline' size={42} iconColor="white"/>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
      <StopWatch />
      <TextApp style={styles.headerText}>TIME OUT</TextApp>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: '88%',
    borderWidth: 1,
    borderColor: 'black',
  },
  bg: {
    flex: 1,
  },
  head: {
    marginTop: 20,
    height: '25%',
    backgroundColor: 'black',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  headerText: {
    fontSize: 32,
    color: '#fff',
    
  },
  body: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  }
});

export default AlertWindow;