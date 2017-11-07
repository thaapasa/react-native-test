import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface FaqType {
    title: String,
    description: String
}

export default class Faq extends React.Component<FaqType, { open: Boolean }> {
    constructor(props: FaqType) {
        super(props);
        this.state = { open: false };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{ this.props.title }</Text>
                { this.state.open && <Text>Open</Text> }
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
