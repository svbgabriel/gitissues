import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  actionButtons: {
    flexDirection: 'row',
    backgroundColor: colors.regular,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    padding: metrics.basePadding / 2,
    justifyContent: 'space-around',
  },

  activated: {
    fontWeight: 'bold',
  },

  deactivated: {
    fontWeight: 'normal',
  },
});

export default styles;
