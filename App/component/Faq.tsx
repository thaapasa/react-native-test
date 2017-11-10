import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface FaqType {
  title: string;
  description: string;
}

export default class Faq extends React.Component<FaqType, { open: boolean }> {
  constructor(props: FaqType) {
    super(props);
    this.state = { open: false };
  }

  private toggleState = () => this.setState(s => ({ open: !s.open }));

  public render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.toggleState}>{this.props.title}</Text>
        {this.state.open && <Text>{this.props.description}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
