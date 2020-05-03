
import React, { Component, useState } from 'react';

import { FlatList } from "react-native";
import { View, Card, Button, Image } from 'react-native-ui-lib';



import STYLES from "./ComponentStyles.js"
import StoreInfo from "./StoreInfo.js"


export default class Dashboard extends Component {

  render() {
    const [stores, setNearbyStore] = useState([]);

    function getNearbyStores() {
      var i;
      var tempArr = []
      for (i = 0; i <= 21; i++) {
        tempArr.push({ key: Math.random().toString(), value: i.toString() });
      }
      console.log(stores);
      setNearbyStore(tempArr);
    }

    return (
      <View style={STYLES.container}>

        <Button label="Check In" style={STYLES.blockButton} ></Button>
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
                address={itemData.item.key}
              />
            )}
          />
        </View>
      </View>
    );
  }
}