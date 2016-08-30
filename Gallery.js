import React, { Component, PropTypes} from 'react';
import { Navigator, Text, TouchableHighlight, View, AppRegistry } from 'react-native';

import Photo from './Photo';

export default class Gallery extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
        <Text>This is the Gallery component.</Text>
        <Photo clickPhoto={this.props.clickPhoto}/>
      </View>
    )
  }
}
