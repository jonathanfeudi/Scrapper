import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, AppRegistry } from 'react-native';

import Home from './Home';
import Gallery from './Gallery';
import Detail from './Detail';

class Scrapper extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home', index: 0 }}
        renderScene={(route, navigator) =>
            {if (route.title == 'Home'){
              return <Home
              title={route.title}

              // Function to call when a new scene should be displayed
              galleryButton={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Gallery',
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
            if (route.title == 'Gallery'){
              return <Gallery title={route.title}
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
              clickPhoto={() => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Detail',
                  index: nextIndex,
                });
              }}
            />
            }
            if (route.title == 'Detail'){
              return <Detail title={route.title}
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
              />
            }
          }
        }
      />
    )
  }
}

AppRegistry.registerComponent('Scrapper', () => Scrapper);
