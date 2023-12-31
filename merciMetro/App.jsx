import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Panel from './components/Panel';
import Search from './components/Search';
import "./style.css"

export default function App() {
    return (
      <View style={styles.container}>
        <Search/>
        {/* <Panel stationID="22175" /> */}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: "white",
    fontSize: "2rem",
    textAlign:"center"
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
