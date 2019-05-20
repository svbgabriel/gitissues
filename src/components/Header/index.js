import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
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

  back = async () => {
    const { navigation } = this.props;

    navigation.navigate('Repositories');
  };

  render() {
    const { title, hasBack } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {hasBack ? (
          <TouchableOpacity onPress={this.back}>
            <Icon name="angle-left" size={32} style={styles.icon} />
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
