import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  spreadContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gutter: {
    marginBottom: 20,
  },
  flexRowItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalPadding: {
    paddingHorizontal: 20,
  },
  horizontalPaddingSmall: {
    paddingHorizontal: 15,
  },
  horizontalPaddingTiny: {
    paddingHorizontal: 10,
  },
  borderTop: {
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  centeredText: {
    textAlign: 'center',
  },
  commonScreen: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex: 1,
  },
  skewLeftBorder: {
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  wrap: {
    flexWrap: 'wrap',
    flex: 1,
  },
});
