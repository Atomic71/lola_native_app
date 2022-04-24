import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // TRULY RUSABLE STYLES:
  shrunkView: {
    flexShrink: 1,
  },
  roundItem: {
    borderRadius: 50,
  },
  skewLeftBorder: {
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  skewRightBorder: {
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  spreadContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  gutter: {
    marginBottom: 20,
  },
  flexRowItems: {
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

  wrap: {
    flexWrap: 'wrap',
    flex: 1,
  },
  standardBorder: {
    borderColor: '#252932',
    borderWidth: 1,
  },
  gutterSmall: {
    marginBottom: 10,
  },
});
