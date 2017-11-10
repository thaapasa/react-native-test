import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Faq, { FaqType } from './component/Faq';

const faqs: FaqType[] = [
  { title: 'What is your name?', description: 'Sir Robin of Camelot.' },
  { title: 'What is your quest?', description: 'To seek the Holy Grail' },
  { title: 'What is the capital of Assyria?', description: 'I don\'t know that! Auuuuuuuugh!' },
];

export default class MainView extends React.Component<{}> {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {faqs.map((f, i) => <Faq title={f.title} description={f.description} key={i} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
