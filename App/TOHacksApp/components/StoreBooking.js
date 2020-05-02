import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    ListView,
} from 'react-native';
import { Card } from 'react-native-ui-lib';

import STYLES from "./ComponentStyles.js"
import { FlatList } from 'react-native-gesture-handler';

export default function StoreBookCard(props) {
    var visibility = props.visible;

    var name = props.name;
    var address = props.address;

    return (
        <View>
            <Card style={STYLES.store_item}>
                <Text>
                    {name}
                </Text>
                <Text>
                    {name}
                </Text>
                <Text>
                    {name}
                </Text>
            </Card>
        </View>
    )
}