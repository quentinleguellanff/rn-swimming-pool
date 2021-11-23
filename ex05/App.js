import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}}>
      <ScrollView horizontal>
          <View style={styles.rectangleViews}>
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.squaredViews}>
          </View>
          <View style={styles.squaredViews}>
          </View>
          <View style={styles.squaredViews}>
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.rectangleViews}>
          </View>
          <View style={styles.rectangleViews}>
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.squaredViews}>
          </View>
          <View style={styles.squaredViews}>
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.rectangleViews}>
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.rectangleViews}>
          </View>
        </ScrollView>
        <ScrollView horizontal>
          <View style={styles.squaredViews}>
          </View>
          <View style={styles.squaredViews}>
          </View>
        </ScrollView>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  squaredViews: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 10
  },
  rectangleViews: {
    width: 200,
    height: 100,
    backgroundColor: 'magenta',
    margin: 10
  }
});
