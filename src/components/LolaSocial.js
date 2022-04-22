import React from 'react';
import {StyleSheet, View} from 'react-native';
import Facebook from '../assets/socialIcons/facebook.svg';
import Instagram from '../assets/socialIcons/instagram.svg';
import Twitter from '../assets/socialIcons/twitter.svg';
import {ABOUT} from '../constants/text';
import commonStyles from '../styles/commonStyles';
import {Body, Subtitle} from './common/Typography';

const styles = StyleSheet.create({
  socialTitle: {
    marginBottom: 10,
  },
  socialIcon: {
    marginRight: 20,
  },
  socialContainer: {
    marginBottom: 20,
  },
});
const LolaSocial = () => {
  return (
    <View>
      <Subtitle content={ABOUT.social.title} styles={[styles.socialTitle]} />
      <View style={[commonStyles.flexRowItems, styles.socialContainer]}>
        <Facebook style={[styles.socialIcon]} />
        <Twitter style={[styles.socialIcon]} />
        <Instagram style={[styles.socialIcon]} />
      </View>
      <Subtitle
        content={ABOUT.social.writeToUs}
        styles={[styles.socialTitle]}
      />
      <Body content={ABOUT.social.email} />
    </View>
  );
};

export default LolaSocial;
