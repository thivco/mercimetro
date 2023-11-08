import { StatusBar } from 'expo-status-bar';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [url, setUrl] = useState();
  const [infos, setInfos] = useState([])

  useState(async () => {
    let requestOptions = {
      method: 'GET',
      apikey: "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"
    }
    await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:24136:", {
      headers: {
        method: 'GET',
        apikey: "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"
      }})

// Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.StopPointName[0]
      .then(response => response.json())
      .then(data => {
        // console.log("date mdr", moment().format('MMMM Do YYYY, h:mm:ss a'))
        // console.log(data)
        infos["station"] = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value;
        infos["destination"] = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.DestinationName[0].value;
        // infos["timestamp"] = new Date(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime).toTimeString().split(" ")[0]
        infos["timestamp"] = moment(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime).fromNow()
        infos["secondTimestamp"] = moment(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[1].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime).fromNow()
        console.log(infos["timestamp"])
        console.log("datage", moment(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime).fromNow())
        setLoading(false)
      })
    })

      // console.log(infos)
    // const getData = async () => {
    //   try {
    //     const response = await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:463158:", requestOptions);
    //     if (!response.ok) {
    //       throw new Error(
    //         `This is an HTTP error: The status is ${response.status}`
    //         );
    //       }
    //       let actualData = await response.json();
    //       setData(actualData);
    //       console.log(actualData)
    //       setError(null);
    //     } catch(err) {
    //     setError(err.message);
    //     setData(null);
    //   } finally {
    //     setLoading(false);
    //   }  
    // }

    // getData()
    // 
    // // let url = "https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:463158"
    // setUrl("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:463158")
    // // // setUrl("https://jsonplaceholder.typicode.com/todos/1")
    // // await setData(url)
    // await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:463158:", {method:"GET", headers:{'apikey': "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"}})
    // .then(response => response.json())
    // // .then(newData)
    // .then(gigadata => setData(gigadata))
    // .catch(error => console.error(error));


    // const headers = {'apikey': "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"}
    // const response = await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:24136:", headers)
    // const tempData = response.json()
    // await setData(tempData)
    // console.log(response.json())
    // setStation(response.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.DestinationName[0].value)
  // }, [data])
  useEffect(() => {
    // console.log(data.Siri.ServiceDelivery)
    // setStation(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.DirectionName[0].value)
  }, [infos])

  if(loading){
    return(
      <View style={styles.container}>
      <Text style={styles.welcomeText}>Metro is down !</Text>
      <StatusBar style="auto" />
    </View>
    )
  }
  else {

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Merci Metro !</Text>
      <Text style={styles.welcomeText}>Welcome to {infos["station"] ? infos["station"] : "Truc"}</Text>
      <Text style={styles.welcomeText}>This train terminates at {infos["destination"] ? infos["destination"] : "Truc"}</Text>
      <Text style={styles.welcomeText}>1st train {infos["timestamp"] ? infos["timestamp"] : "Truc"}</Text>
      <Text style={styles.welcomeText}>2nd train {infos["secondTimestamp"] ? infos["secondTimestamp"] : "Truc"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}}

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
