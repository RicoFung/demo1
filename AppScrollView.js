import React, { Component } from 'react';
import{ ScrollView, Image, Text, View } from 'react-native'

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return(
            <ScrollView>
                <Text style={{fontSize:50}}>Scroll me plz</Text>
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Text style={{fontSize:50}}>If you like</Text>
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Text style={{fontSize:50}}>Scrolling down</Text>
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Text style={{fontSize:50}}>What's the best</Text>
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Text style={{fontSize:50}}>Framework around?</Text>
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Image source={require('./img/logo.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}