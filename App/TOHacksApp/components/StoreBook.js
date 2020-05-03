import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Card, Dialog, TextField, Button, DateTimePicker } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"

export default function StoreBook(props) {
    return (
        <View style={STYLES.container}>
            <Card center style={STYLES.login, STYLES.card}>
                <Text style={STYLES.titleText} > Book a Time.</Text>
                <Text>Walmart</Text>

        
                <DateTimePicker 
                title={'Date'} 
                placeholder={'Select a date'} 
                // dateFormat={'MMM D, YYYY'}
                // value={new Date('October 13, 2014')} 
                />
                <DateTimePicker 
                mode={'time'} 
                title={'Time'} 
                placeholder={'Select time'}
                // timeFormat={'h:mm A'}
                // value={new Date('2015-03-25T12:00:00-06:30')}
                />
                

            </Card>
        </View>
    )
}