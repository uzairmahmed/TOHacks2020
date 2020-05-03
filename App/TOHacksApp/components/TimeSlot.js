import React, { Component } from 'react'

import { View, Text, Card, TouchableOpacity } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"
import StoreInfo from "./StoreInfo.js"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hour1: 0,
            hour2: 24,
        };
    }
    render() {
        return (
            <View>
                <TouchableOpacity >
                    <Card style={STYLES.time_item}>
                        <Text>
                            {this.props.name}
                        </Text>
                        <View>
                            <Text>
                                {("0" + this.props.hour1).slice(-2)}:00
                            </Text>
                            <Text>
                                {":"}
                            </Text>
                            <Text>
                                {("0" + this.props.hou2).slice(-2)}:00
                            </Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        )
    }
}