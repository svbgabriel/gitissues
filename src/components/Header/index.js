import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  state = {};

  static propTypes = {
    title: PropTypes.string.isRequired,
    hasBack: PropTypes.bool,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    hasBack: false,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  render() {
    const { title, hasBack } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {hasBack ? (
          <TouchableOpacity onPress={this.signOut}>
            <Icon name="exchange" size={16} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.left} />
        )}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);
