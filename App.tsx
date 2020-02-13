import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const logoUri = `https://source.unsplash.com/hIgeoQjS_iE/500x500`

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <View style={styles.container}>
      {/* <Image
        accessibilityLabel="React logo"
        source={{ uri: logoUri }}
        resizeMode="center"
        style={styles.backgroundImage}
      /> */}
      <Text style={styles.text}>Open up App.tsx to start working on your app!!!</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  text: {
    color: 'orange'
  }
});
