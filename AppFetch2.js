import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class ApiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return this.getListFromApi();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>[category_id]:{rowData.CATEGORY_ID}, [nav_name]:{rowData.NAV_NAME}, [name]:{rowData.NAME}</Text>}
                />
            </View>
        );
    }

    getListFromApi() {
        return fetch('http://119.23.57.155:82/origami/client/model/queryPage.action',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'offset=0&limit=3'
            })
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function() {
                    // do something with new state
                    // console.info(responseJson);
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}