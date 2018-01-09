import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, Image, View } from 'react-native';

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
                    renderRow={(rowData) => this.renderRow(rowData)}
                />
            </View>
        );
    }

    // 获取接口数据
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
                    dataSource: ds.cloneWithRows(responseJson)
                }, function() {
                    // do something with new state
                    // console.info(responseJson);
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // 渲染每行数据
    renderRow(rowData) {
        var imgUri = 'http://119.23.57.155:82/origami/images/'+rowData.IMAGE_NAME;
        return (
            <Image source={{uri: imgUri}} style={{width: 100, height: 100}} />
        )
    }
}