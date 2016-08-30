import React, { Component } from 'react';
import { Navigator, Text, TouchableHighlight, View, Image } from 'react-native';

export default class Photo extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.clickPhoto}>
        <Text>This is a photo.</Text>
      </TouchableHighlight>
    )
  }
}
