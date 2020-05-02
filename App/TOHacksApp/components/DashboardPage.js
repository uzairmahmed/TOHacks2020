import React, { useState } from 'react'; //some hello

import { TouchableOpacity, FlatList } from "react-native";
import { View, Text, TextField, Card, Button, Image } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"
import SearchBar from "./SearchBar.js"
import StoreBooking from "./StoreBooking.js"


export default function Dashboard() {
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
      <SearchBar />
      <Card center style={STYLES.card}>
          <Image
            style={STYLES.map}
            source={require('../assets/staticmap.png')}
          />
          <Button label="Login" onPress={getNearbyStores.bind()} style={STYLES.blockButton} ></Button>
      </Card>
      
      <Card center style={STYLES.card}>
        <FlatList
            data={stores}
            renderItem={itemData => (
              < StoreBooking
                name={itemData.item.value}
                address = {itemData.item.key}
              />
            )}
        />
      </Card>
    </View>
  );
  
}