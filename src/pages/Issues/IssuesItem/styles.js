import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: metrics.baseRadius * 5,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin,
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
