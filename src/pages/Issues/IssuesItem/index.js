import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import styles from './styles';

export default class IssuesItem extends Component {
  static propTypes = {
    issue: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  };

  openIssue = (url) => {
    Linking.openURL(url);
  };

  render() {
    const { issue } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {issue.title}
          </Text>
          <Text style={styles.user}>{issue.user.login}</Text>
        </View>
        <TouchableOpacity onPress={() => this.openIssue(issue.html_url)}>
          <Icon name="angle-right" size={16} style={styles.infoIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}
