import React, { Component } from 'react';
import { View, Text, TextField, Card, Button } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"

export default class SearchBar extends Component {
  render() {
    return (
      <View>
        <View style={STYLES.card, STYLES.search}>
          <TextField
            text40L
            style={STYLES.searchbox}
            rightIconSource={require('../assets/splash.png')}
            placeholder="Search"></TextField>
          </View>
      </View>
    );
  }
}