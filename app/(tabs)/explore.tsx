import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
   color:'white',
  },
  
});
