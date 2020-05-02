import React, { Component } from 'react';
import { View, Text, TextField, Card, Button } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"

export default class SearchBar extends Component {
  render() {
    return (
      <View>
          <Card center style={STYLES.card, STYLES.search}>
            <TextField
              centered
              floatingPlaceholder
              placeholder="Search"></TextField>
          </Card>
      </View>
    );
  }
}