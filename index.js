import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image
} from 'react-360'

export default class vreact extends React.Component {
  state = {
    count: 0,
  };

  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={styles.panel}>
        <VrButton
          onClick={this._incrementCount}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {`Count: ${this.state.count}`}
          </Text>
          <Text style={styles.author}>
            Project made by @iCarlosSz
          </Text>
          <Image style={styles.img} source={{ uri: 'https://pbs.twimg.com/profile_images/974299319347138560/tMy3qkz1_400x400.jpg'}} />
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#f55',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 30,
    textAlign: 'center',
  },
  author: {
    textAlign: 'center',
    color: '#f55',
  },
  img:  {
    width: 100,
    height: 100,
    marginTop: 10,
  }
});

AppRegistry.registerComponent('vreact', () => vreact);
