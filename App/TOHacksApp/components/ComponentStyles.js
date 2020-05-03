import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

const bgColor = '#fff';
const fgColor = '#f0f0f0';
const textColor = '#000';
const accentColor1 = '#ff0000';
const accentColor2 = '#00ff00';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: 50,
        marginHorizontal: 20,
        marginBottom:0,
    },
    card: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: bgColor,
    },
    login: {
        margin: 30,
        padding: 60
    },
    listCard: {
        flex: 1,
        marginHorizontal: 10,
    },
    titleText: {
        fontSize: 30,
        padding: 20
    },
    subtitleText: {
        fontSize: 20,
        padding: 20
    },    
    blockButton: {
        margin: 10,
        backgroundColor: textColor,
        fontSize:10
    },
    sliderInputArea: {
        alignItems:"center",
        width:"90%",
        marginHorizontal: 1
    },
    sliderContainer: {
        width: "100%",
        marginHorizontal: 1
    }, 
    popup: {
        marginHorizontal: 10 
    },
    map: {
        borderRadius:10,
        justifyContent: "center",
        flex: 1,
        height: "100%",
        width: "100%"
    },
    store_list: {
        marginTop: 10,
        paddingHorizontal: 30,
        width: "100%",
    },
    store_item: {
        flexDirection: "row",
        justifyContent:"space-between",
        marginVertical:10,
        paddingHorizontal: 40,
        padding: 20,
        borderRadius: 10
    },
    time_item: {
        flexDirection: "row",
        justifyContent:"space-between",
        marginVertical:10,
        padding: 20,
        borderRadius: 10
    }
});
  
export default styles;