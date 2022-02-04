import { ImageBackground, TouchableOpacity, Image, Text, View } from 'react-native';
import React, { Component } from 'react';
import styles from '../Styles/App';
const img1 = require('../assets/person1.jpg');
const img2 = require('../assets/person2.jpg');
const img3 = require('../assets/person3.jpg');
const img4 = require('../assets/person4.jpg');
const img5 = require('../assets/person5.jpg');
const MybackgroundImageFile = require('../assets/bg.jpg')

export default class Dashboard extends Component {
  render() {
    return (
          <View style={styles.container}>
           
            {/* first row */}
            <View style={styles.flxBox}>
                <TouchableOpacity onPress={()=>alert(1)}>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                    <Image source={img4} style={styles.imagChange}/>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert(2)}>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                  <Image source={img1} style={styles.imagChange}/>
                  </ImageBackground>
                </TouchableOpacity>
            </View>
            {/* first row end */}

           
            {/* second row */}
            <View style={styles.flxBox}>
              <TouchableOpacity onPress={()=>alert(3)}>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                    <Image source={img2} style={styles.imagChange}/>
                  </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>alert(4)}>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                    <Image source={img3} style={styles.imagChange}/>
                  </ImageBackground>
              </TouchableOpacity>
            </View>
            {/* second row end */}

           
            {/* Three row */}
            <View style={styles.flxBox}>
            <TouchableOpacity onPress={()=>alert(5)}>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                      <Image source={img4} style={styles.imagChange}/>
                  </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>alert(6)}>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                  <Image source={img5} style={styles.imagChange}/>
                  </ImageBackground>
                  </TouchableOpacity>
            </View>
            {/* Three row end */}

          
            {/* four row */}
            <View style={styles.flxBox}>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                  <Image source={img3} style={styles.imagChange}/>
                  </ImageBackground>
                  <ImageBackground source={MybackgroundImageFile} style={styles.bgImg}>
                  <Image source={img1} style={styles.imagChange}/>
                  </ImageBackground>
            </View>
            {/* four row end */}
          </View>
    );
  }
}