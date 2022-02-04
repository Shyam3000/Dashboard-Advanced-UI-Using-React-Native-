import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import styles from '../Styles/App';

export default class ExampleProps extends Component {

    constructor(){
        super();
        this.state = {
            name:'vishal'
        }
    }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <View  style={styles.flxBox}>
            <Text style={styles.textColorW}>{this.state.name}</Text>
            <Text style={styles.textColorW}>{this.props.age}</Text>
        </View>
        <Button title='click Here' onPress={()=>this.setState({name:"Baber Sher"})}/>
      </View>
    );
  }
}

