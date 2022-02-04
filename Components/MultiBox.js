import { View } from 'react-native';
import React, { Component } from 'react';
import styles from '../Styles/App';
import Dashboard from './Dashboard';

export default class MultiBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard/>
      </View>
    );
  }
}