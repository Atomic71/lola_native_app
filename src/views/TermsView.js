import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Body, Subtitle, Title} from '../components/common/Typography';
import {TERMS_SECTIONS} from '../constants/terms';
import {TAC} from '../constants/text';
import commonStyles from '../styles/commonStyles';

const viewStyles = StyleSheet.create({
  viewTitle: {
    marginBottom: 20,
  },
  sectionWrapper: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 10,
  },
  sectionText: {
    marginBottom: 10,
  },
  sectionPoint: {
    marginBottom: 5,
  },
});

const TermsSection = ({text, title, subsection, points, styles}) => {
  return (
    <View style={styles}>
      {title && <Subtitle content={title} styles={[viewStyles.sectionTitle]} />}
      {text && <Body content={text} />}
      {points &&
        points.map((point, i) => (
          <Body content={point} key={i} styles={[viewStyles.sectionPoint]} />
        ))}
      {subsection && <TermsSection {...subsection} />}
    </View>
  );
};

const TermsView = () => {
  return (
    <ScrollView
      style={[commonStyles.horizontalPaddingSmall, commonStyles.commonScreen]}>
      <Title content={TAC.title} styles={[viewStyles.viewTitle]} />
      {TERMS_SECTIONS.map((termContent, i) => {
        return (
          <TermsSection
            styles={[viewStyles.sectionWrapper]}
            key={i}
            {...termContent}
          />
        );
      })}
    </ScrollView>
  );
};
export default TermsView;
