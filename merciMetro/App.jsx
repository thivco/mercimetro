import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState();
  const [station, setStation] = useState();

  useState(async () => {
    let requestOptions = {
      method: 'GET',
      apikey: "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn",
      redirect: 'follow'
    }
    const getData = async () => {
      try {
        const response = await fetch( "https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:463158:", requestOptions);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
            );
          }
          let actualData = await response.json();
          setData(actualData);
          console.log("actualData")
          setError(null);
        } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }

    getData()

    // // let url = "https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:463158"
    // setUrl("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:463158")
    // // // setUrl("https://jsonplaceholder.typicode.com/todos/1")
    // // await setData(url)
    // await fetch(url, {method:"GET", headers:{'apikey': "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"}})
    // .then(response => response.json())
    // .then(newData )
    // // .then(gigadata => console.log(gigadata.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].RecordedAtTime))
    // .catch(error => console.error(error));
    
    
    // const headers = {'apikey': "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"}
    // const response = await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:24136:", headers)
    // const tempData = response.json()
    // await setData(tempData)
    // console.log(response.json())
    // setStation(response.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.DestinationName[0].value)
  }, [data])


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Merci Metro !</Text>
      <Text style={styles.welcomeText}>{station}</Text>
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
  }


});
