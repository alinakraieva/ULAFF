import React from 'react';
import CountdownCircle from 'react-native-countdown-circle';

function StopWatch() {

    return (
        <CountdownCircle
          seconds={60}
          radius={81}
          borderWidth={10}
          color="black"
          bgColor="#fff"
          textStyle={{ fontSize: 32 }}
          onTimeElapsed={() => console.log('elapsed')}
        />
    );
}

export default StopWatch;