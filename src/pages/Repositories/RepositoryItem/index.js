import React from 'react';

import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: repository.owner.avatar_url }} />

    <View style={styles.infoContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{repository.name}</Text>
        <Text style={styles.owner}>{repository.owner.login}</Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="angle-right" size={16} style={styles.infoIcon} />
      </TouchableOpacity>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
