import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

const bgColor = '#fff';
const fgColor = '#fff';
const textColor = '#000';
const accentColor1 = '#ff0000';
const accentColor2 = '#00ff00';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: 30,
        marginBottom:30,
    },
    card: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 40,
        backgroundColor: bgColor,
    },
    login: {
        margin: 30,
        padding: 60
    },
    titleText: {
        fontSize: 30,
        padding: 20
    },
    blockButton: {
        backgroundColor: accentColor1,
        fontSize:10
    },
    search: {
        marginVertical: 10,
        justifyContent: "center",
        marginHorizontal: 40
    },
    map: {
        justifyContent: "center",
        flex: 1,
        height: "100%",
        width: "100%"
    }
});
  
export default styles;