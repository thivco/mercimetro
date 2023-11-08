import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Panel from './components/Panel';

export default function App() {
    return (
      <View style={styles.container}>
        <Panel/>
        <StatusBar style="auto" />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: "white",
    fontSize: "2rem"
  },
  title: {
    fontWeight: "bolder"
  },
  panelTitle: {
    display: "flex",
    flexDirection: "row"
  },
  timestamps: {
    marginTop:"2rem",
    display: "flex",
    flexDirection:"row",
    gap:"2rem"
  },
  singleTimestamp : {
    display:"flex",
    textAlign : "center",
    justifyContent:"center",
    alignItems:"center"
  }
});
