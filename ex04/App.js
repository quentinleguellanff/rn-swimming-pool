import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <Text style={{color: 'white'}}>
        Header
      </Text>
    </View>
    <View style={styles.main}>
    <Text>
      Hello
    </Text>
    <Image source={require('./assets/image.jpg')}/>
    </View>
    <View style={styles.footer}>
    <Text>
        Footer
    </Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  header: {
    flex : 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  main: {
    flex: 20,
    backgroundColor: '#EFEFEF',
    alignItems : 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    color : 'black',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
