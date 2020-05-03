import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { View, Text, Card, Button, Image } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"
import StoreInfo from "./StoreInfo.js"
import QRScan from "./QRScan.js"


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stores: []
		};
	}

	getNearbyStores = () => {
		var i;
		var tempArr = [];
		for (i = 0; i < 21; i++) {
			tempArr.push({ key: Math.random().toString(), value: i.toString() });
		}
		this.setState({ stores: tempArr });
	};

    render() {
        return (
            <View style={STYLES.container}>
                <QRScan />

                <Button label="Check In" style={STYLES.blockButton} ></Button>
                <Card center style={STYLES.card}>
                    <Image
                        style={STYLES.map}
                        source={require('../assets/staticmap.png')}
                    />
                    <Button label="Login" onPress={this.getNearbyStores} style={STYLES.blockButton} ></Button>
                </Card>

                <View center style={STYLES.listCard}>
                    <FlatList
                        style={STYLES.store_list}
                        data={this.state.stores}
                        renderItem={itemData => (
                            < StoreInfo
                                name={itemData.item.value}
                                address={itemData.item.key}
                            />
                        )}
                    />
                </View>
            </View>
        )
    }
}

// src/screens/Detail.js
