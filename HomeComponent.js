import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

    static navationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <Text> Home Component</Text>
            </View>
        );
    }
}

export default Home;