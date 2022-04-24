import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import categories from '../../constants/categories';
import commonStyles from '../../styles/commonStyles';
import {BackButton} from '../common/Buttons';
import {Title} from '../common/Typography';

const styles = StyleSheet.create({
  imgStyle: {
    height: 90,
    width: 90,
    right: 0,
    left: undefined,
  },
  imgContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 110,
    paddingBottom: 10,
  },
});

const CategoryHeader = ({route, navigation}) => {
  const {params} = route;
  const {category} = params;
  const {categoryImage: Img, key: title} = categories.find(
    ({key}) => key === category,
  );
  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      style={[commonStyles.horizontalPadding]}>
      <ImageBackground
        source={Img}
        imageStyle={styles.imgStyle}
        style={styles.imgContainerStyle}
        resizeMethod="resize">
        <BackButton onPress={navigation.goBack} />
        <Title content={title.toUpperCase()} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CategoryHeader;
