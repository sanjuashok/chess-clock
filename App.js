import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClockContainer from './src/components/ClockContainer';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.appStyle} >
        <ClockContainer>
        </ClockContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    appStyle : {
        flex: 1
    }
});
