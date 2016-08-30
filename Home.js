import React, { Component, PropTypes} from 'react';
import { Navigator, Text, TouchableHighlight, View, AppRegistry } from 'react-native';

export default class Home extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    galleryButton: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={{marginTop:20}}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.galleryButton}>
          <Text>Gallery</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
