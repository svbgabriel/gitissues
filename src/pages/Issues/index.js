import React, { Component } from 'react';
import api from '~/services/api';
import {
  View, ActivityIndicator, FlatList, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import IssuesItem from './IssuesItem';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Issues extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    repositoryName: '',
    loading: true,
    refreshing: false,
    activatedAll: true,
    activatedOpened: false,
    activatedClosed: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const repository = navigation.getParam('repository', 'NO-REPO');

    const { data } = await api.get(`/repositories/${repository.id}/issues`);

    this.setState({
      data,
      loading: false,
      refreshing: false,
      repositoryName: repository.name,
    });
  };

  getAllIssues = async () => {
    const { activatedAll } = this.state;

    if (!activatedAll) {
      this.setState({ refreshing: true });

      const { navigation } = this.props;
      const repository = navigation.getParam('repository', 'NO-REPO');
      const { data } = await api.get(`/repositories/${repository.id}/issues`);

      this.setState({
        data,
        activatedAll: true,
        activatedOpened: false,
        activatedClosed: false,
        refreshing: false,
      });
    }
  };

  getOpenedIssues = async () => {
    const { activatedOpened } = this.state;

    if (!activatedOpened) {
      this.setState({ refreshing: true });

      const { navigation } = this.props;
      const repository = navigation.getParam('repository', 'NO-REPO');
      const { data } = await api.get(`/repositories/${repository.id}/issues?state=open`);

      this.setState({
        data,
        activatedAll: false,
        activatedOpened: true,
        activatedClosed: false,
        refreshing: false,
      });
    }
  };

  getClosedIssues = async () => {
    const { activatedClosed } = this.state;

    if (!activatedClosed) {
      this.setState({ refreshing: true });

      const { navigation } = this.props;
      const repository = navigation.getParam('repository', 'NO-REPO');
      const { data } = await api.get(`/repositories/${repository.id}/issues?state=closed`);

      this.setState({
        data,
        activatedAll: false,
        activatedOpened: false,
        activatedClosed: true,
        refreshing: false,
      });
    }
  };

  renderListItem = ({ item }) => <IssuesItem issue={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const {
      loading, repositoryName, activatedAll, activatedOpened, activatedClosed,
    } = this.state;
    return (
      <View style={styles.container}>
        <Header title={repositoryName} hasBack />
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={this.getAllIssues}>
            <Text style={{ fontWeight: activatedAll ? 'bold' : 'normal' }}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getOpenedIssues}>
            <Text style={{ fontWeight: activatedOpened ? 'bold' : 'normal' }}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getClosedIssues}>
            <Text style={{ fontWeight: activatedClosed ? 'bold' : 'normal' }}>Fechadas</Text>
          </TouchableOpacity>
        </View>
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}

Issues.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
