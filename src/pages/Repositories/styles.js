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

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: metrics.baseMargin,
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginHorizontal: metrics.baseMargin,
  },

  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.whiteTransparent,
  },
});

export default styles;
