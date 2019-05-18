import React, { Component } from 'react';
import api from '~/services/api';
import {
  View, ActivityIndicator, FlatList, TextInput, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import RepositoryItem from './RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = JSON.parse(await AsyncStorage.getItem('@Gitissues:repositories')) || [];
    this.setState({ repositories, loading: false, refreshing: false });
  };

  addRepository = async () => {
    this.setState({ refreshing: true });

    const { repositoryInput, repositories } = this.state;

    const { data } = await api.get(`/repos/${repositoryInput}`);

    await AsyncStorage.setItem('@Gitissues:repositories', JSON.stringify([...repositories, data]));
    this.setState({
      repositories: [...repositories, data],
      loading: false,
      refreshing: false,
      repositoryInput: '',
    });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { repositories, refreshing } = this.state;

    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading, repositoryInput } = this.state;
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repositoryInput}
            onChangeText={repository => this.setState({ repositoryInput: repository })}
          />
          <TouchableOpacity onPress={this.addRepository}>
            <Icon name="plus" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
