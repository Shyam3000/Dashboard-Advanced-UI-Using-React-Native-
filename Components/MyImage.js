import {View, Image, Text } from 'react-native';
import React, { Component } from 'react';
import styles from '../Styles/App';
const logo = require('../assets/favicon.png');
 class MyImage extends Component {
  render() {
    return (
      <View>
         <Text style={styles.txtStyle}>Hiiii</Text>
         <Image source={logo} style={styles.imagChange} />
      </View>
    );
  }
}
export default MyImage;