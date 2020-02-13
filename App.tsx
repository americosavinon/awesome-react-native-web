import React, { useState } from "react"
import { Button, Image, StyleSheet, Text, View } from "react-native"

const logoUri = `https://www.google.com/a/cpanel/rallyhealth.com/images/logo.gif?service=google_gsuite`

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Image
        accessibilityLabel="React logo"
        source={{ uri: logoUri }}
        resizeMode="center"
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to Virtual Visits</Text>
      <Text style={styles.text}>(total visits: {count})</Text>
      <Button
        title="Start a new visit"
        onPress={() => setCount(count + 1)}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 200,
    width: 200
  },
  text: {
    fontSize: 20,
    color: "orange"
  }
})
