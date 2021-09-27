import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from './Icon';


export default function TimeOut() {

  return (
    <TouchableOpacity
      style={styles.countOf}
      onPress={() => console.log('pressed')}
    >
      <Icon name='timer-sand-full'/>
      <Icon name='timer-sand-full'/>
      <Icon name='timer-sand-full'/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  countOf: {
    flexDirection: 'row',
    //backgroundColor: 'red',
  }
});