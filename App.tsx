import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const logoUri = `https://source.unsplash.com/hIgeoQjS_iE/500x500`

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        accessibilityLabel="React logo"
        source={{ uri: logoUri }}
        resizeMode="center"
        style={styles.backgroundImage}
      /> */}
      <Text style={styles.header}>Open up App.tsx to start working on your app!!!</Text>
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
  header: {
    color: 'orange'
  }
});
