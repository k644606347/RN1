import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Button title="click me" onPress={e => {
                console.log(e);
                }}></Button>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
