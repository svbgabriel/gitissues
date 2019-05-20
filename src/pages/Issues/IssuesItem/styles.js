import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: metrics.baseRadius * 10,
    marginRight: metrics.baseMargin,
  },

  textContainer: {
    flexDirection: 'column',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
  },

  user: {
    fontSize: 14,
  },
});

export default styles;
