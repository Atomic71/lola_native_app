import React from 'react';
import {StyleSheet, View} from 'react-native';
import Facebook from '../assets/socialIcons/facebook.svg';
import Instagram from '../assets/socialIcons/instagram.svg';
import Twitter from '../assets/socialIcons/twitter.svg';
import {ABOUT} from '../constants/text';
import commonStyles from '../styles/commonStyles';
import ExternalLink from './common/ExternalLink';
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

const externalLinks = [
  {icon: Facebook, linkTo: 'https://www.facebook.com/lolamagazin'},
  {icon: Twitter, linkTo: 'https://twitter.com/lola_magazin'},
  {icon: Instagram, linkTo: 'https://www.instagram.com/lolamagazin_'},
];

const renderLink = (Icon, linkTo) => (
  <ExternalLink
    key={linkTo}
    linkTo={linkTo}
    icon={() => <Icon style={styles.socialIcon} />}
  />
);

const LolaSocial = () => {
  return (
    <View>
      <Subtitle
        content={ABOUT.social.title}
        textStyles={[styles.socialTitle]}
      />
      <View style={[commonStyles.flexRowItems, styles.socialContainer]}>
        {externalLinks.map(({icon, linkTo}) => renderLink(icon, linkTo))}
      </View>
      <Subtitle
        content={ABOUT.social.writeToUs}
        textStyles={[commonStyles.gutterSmall]}
      />
      <ExternalLink linkTo={'mailto:lola@dotmedia.ba'}>
        <Body content={ABOUT.social.email} />
      </ExternalLink>
    </View>
  );
};

export default LolaSocial;
