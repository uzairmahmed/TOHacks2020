import React, { useState } from 'react'; //some hello

import { TouchableOpacity, FlatList } from "react-native";
import { View, Text, TextField, Card, Button, Image } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"
import SearchBar from "./SearchBar.js"
import StoreInfo from "./StoreInfo.js"


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
      <Card center style={STYLES.card}>
          <Image
            style={STYLES.map}
            source={require('../assets/staticmap.png')}
          />
          <Button label="Login" onPress={getNearbyStores.bind()} style={STYLES.blockButton} ></Button>
      </Card>
      
      <View center style={STYLES.listCard}>
        <FlatList
          style={STYLES.store_list}
            data={stores}
            renderItem={itemData => (
              < StoreInfo
                name={itemData.item.value}
                address = {itemData.item.key}
              />
            )}
        />
      </View>
    </View>
  );
  
}