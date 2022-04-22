import React from 'react';
import {ScrollView, View} from 'react-native';
import {Body, Title} from '../components/common/Typography';
import LolaSocial from '../components/LolaSocial';
import {ABOUT} from '../constants/text';
import commonStyles from '../styles/commonStyles';

const AboutView = () => {
  return (
    <View style={[commonStyles.horizontalPadding, commonStyles.commonScreen]}>
      <ScrollView style={[commonStyles.commonScreen]}>
        <Title content={ABOUT.title} styles={[commonStyles.gutter]} />
        {ABOUT.content.map((contentItem, i) => (
          <Body key={i} content={contentItem} styles={[commonStyles.gutter]} />
        ))}
        <LolaSocial />
      </ScrollView>
    </View>
  );
};

export default AboutView;
