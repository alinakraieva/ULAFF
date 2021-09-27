import React from 'react';
import { View, StyleSheet } from 'react-native';
import defaultStyles from "../config/styles";

import TextApp from './TextApp';

function Rectangle({
  title='title1',
  height,
  width='100%',
  color='black',
  opacity='0.8',
  style,
  ...otherProps
}) {
  return (
    <View style={{
      height: height,
      width: width,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: opacity,
      paddingHorizontal: 10,
    }}>
      <TextApp style={styles.ap}>{title}</TextApp>
    </View>
  );
}

const styles = StyleSheet.create({
  ap: {
    fontSize: 48,
    color: 'white',
  }
});

export default Rectangle;