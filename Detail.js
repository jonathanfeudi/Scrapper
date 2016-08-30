import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight, View, Image } from 'react-native';

export default class Photo extends Component {
  render() {
    return (
      <View>
        <Text>This is the detail view.</Text>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
