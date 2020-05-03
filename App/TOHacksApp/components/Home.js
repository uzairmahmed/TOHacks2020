import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { View, Card, Button, Image, Dialog, PanningProvider } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"
import StoreInfo from "./StoreInfo.js"
import QRScan from "./QRScan.js"


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.SCROLL_TYPE = {
            NONE: 'none',
            VERTICAL: 'vertical',
            HORIZONTAL: 'horizontal'
        };
        this.state = {
            panDirection: PanningProvider.Directions.DOWN,
            position: 'center',
            scroll: "vertical",
            showHeader: false,
            isRounded: true,
            showDialog: false,
            stores: []
        };
    }

    fadeInNOut = () => {
        this.setState({ showDialog: true }); //run with an anim
        delay()
    };

    showDialog = () => {
        this.setState({ showDialog: true });
    };

    hideDialog = () => {
        this.setState({ showDialog: false });
    };

    renderDialog = (name) => {
        const { showDialog, panDirection, position, scroll, showHeader, isRounded } = this.state;
        const renderPannableHeader = showHeader ? this.renderPannableHeader : undefined;
        const height = scroll !== this.SCROLL_TYPE.NONE ? '70%' : undefined;
        return (
            <Dialog
                migrate
                useSafeArea
                top={position === 'top'}
                bottom={position === 'bottom'}
                height={height}
                panDirection={panDirection}
                visible={showDialog}
                onDismiss={this.hideDialog}
                renderPannableHeader={renderPannableHeader}
                pannableHeaderProps={this.pannableTitle}
                supportedOrientations={this.supportedOrientations}
            >
                <QRScan />
            </Dialog>
        );
    };



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

                <Button label="Check In" style={STYLES.blockButton} onPress={this.showDialog}></Button>
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
                {this.renderDialog()}
            </View>
        )
    }
}

// src/screens/Detail.js
