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
  },

  infoContainer: {
    marginTop: metrics.baseMargin,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textContainer: {
    marginRight: metrics.baseMargin,
  },

  infoIcon: {
    color: colors.light,
  },

  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  owner: {
    color: colors.dark,
    fontSize: 12,
  },

  image: {
    width: 42,
    height: 42,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
