import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight, View, Image } from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <View style={{marginTop:20}}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
