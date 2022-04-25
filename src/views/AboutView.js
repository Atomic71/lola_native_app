import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Body, Title} from '../components/common/Typography';
import LolaCopyright from '../components/LolaCopyright';
import LolaSocial from '../components/LolaSocial';
import {ABOUT} from '../constants/text';
import commonStyles from '../styles/commonStyles';

const AboutView = () => {
  return (
    <SafeAreaView
      edges={['bottom']}
      style={[commonStyles.horizontalPadding, commonStyles.commonScreen]}>
      <ScrollView style={[commonStyles.commonScreen]}>
        <Title content={ABOUT.title} styles={[commonStyles.gutter]} />
        {ABOUT.content.map((contentItem, i) => (
          <Body key={i} content={contentItem} styles={[commonStyles.gutter]} />
        ))}
        <LolaSocial />
      </ScrollView>
      <LolaCopyright />
    </SafeAreaView>
  );
};

export default AboutView;
