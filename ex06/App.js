import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  const [destinations] = useState([])

  const onPress = () => {
    if(text != ''){
      destinations.unshift(text)
    }
    setText('')
    console.log(destinations)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
        value={text}
        onChangeText={text => setText(text)} 
        style={{fontSize: 20}} 
        placeholder="enter a destination"
        />
        <Button title="Add" 
        style={{fontSize: 20, alignSelf: 'flex-end'}}
        onPress={onPress}
        />
      </View>
      <ScrollView style={styles.main}>
        <View style={{ alignItems: 'center',
    justifyContent: 'center', padding: 10}}>
          {destinations.map(destination => <Text onPress={() => {alert('pressed')}} style={styles.country}>{destination}</Text>)}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={{fontSize: 20}}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  main: {
    backgroundColor: 'lightgrey',
  },
  country: {
    fontSize: 30,
    margin: 5,
  },
  footer: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 20
  }
});
