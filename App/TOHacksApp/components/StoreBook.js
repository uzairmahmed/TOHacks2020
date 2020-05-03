import React, { useState } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Colors, Card, Dialog, TextField, Button, DateTimePicker, Slider } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"

export default function StoreBook(props) {
    const [stores, setNearbyStore] = useState([]);

    function getNearbyStores() {
      var i;
      var tempArr = []
      for (i = 0; i <= 21; i++) {
          tempArr.push({ key: Math.random().toString() , value: i.toString()});
      }
      console.log(stores);
      setNearbyStore(tempArr);
    }

    return (
        <View style={STYLES.container}>
            <Card center style={STYLES.popup, STYLES.card}>
                <Text style={STYLES.titleText} > Book a Time.</Text>
                <Text>Walmart</Text>

                <Text>Pick a Date</Text>

                <DateTimePicker
                    title={'Date'}
                    placeholder={'Select a date'}
                    dateFormat={'MMM D, YYYY'}
                // value={new Date('October 13, 2014')} 
                />
                <View row centerV style={STYLES.sliderInputArea}>
                    <Text>Select a Length</Text>
                    <Slider
                        value={10}
                        minimumTrackTintColor={Colors.dark10}
                        maximumTrackTintColor={Colors.dark60}
                        thumbTintColor={Colors.dark10}
                        minimumValue={0}
                        maximumValue={60}
                        step={10}
                        containerStyle={STYLES.sliderContainer}
                    />
                    <Text>minutes</Text>
                    <Button label="Login" onPress={getNearbyStores.bind()} style={STYLES.blockButton} ></Button>
                </View>

                <Text>Choose a Time Slot</Text>

                <View center style={STYLES.listCard}>
                    <FlatList
                        style={STYLES.store_list}
                        data={stores}
                        renderItem={itemData => (
                            <Text> Panda </Text>
                        )}
                    />
                </View>





            </Card>
        </View>
    )
}