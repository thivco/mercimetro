import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import moment from 'moment/moment';


export default function Panel() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [url, setUrl] = useState();
    const [infos, setInfos] = useState([])

    useState(async () => {
        await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:24136:", {
          headers: {
            method: 'GET',
            apikey: "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"
          }
        })
    
          .then(response => response.json())
          .then(data => {
            infos["station"] = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value;
    
            infos["destination"] = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.DestinationName[0].value;
    
            infos["timestamp"] = moment(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime).fromNow()
    
            infos["secondTimestamp"] = moment(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[1].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime).fromNow()
    
            setLoading(false)
          })
      })

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Metro is down !</Text>
            </View>
        )
    }
    else {

        return (
            <View style={styles.panel}>
                <View style={styles.panelTitle}>
                    <Text style={styles.welcomeText}>Ligne 7</Text>
                    <Text style={styles.welcomeText}> - <span style={styles.title}>{infos["station"] ? infos["station"] : "Truc"}</span></Text>
                </View>
                <Text style={styles.welcomeText}>Direction <span style={styles.title}>{infos["destination"] ? infos["destination"] : "Truc"}</span></Text>
                <View style={styles.timestamps}>
                    <View style={styles.singleTimestamp}>
                        <Text style={styles.welcomeText}>1st train</Text>
                        <Text style={styles.welcomeText}><span style={styles.title}>{infos["timestamp"] ? infos["timestamp"] : "Truc"}</span></Text>
                    </View>
                    <View style={styles.singleTimestamp}>
                        <Text style={styles.welcomeText}>2nd train</Text>
                        <Text style={[styles.welcomeText, styles.timestamp]}><span style={styles.title}>{infos["secondTimestamp"] ? infos["secondTimestamp"] : "Truc"}</span></Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcomeText: {
      color: "black",
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
    },
    panel : {
        backgroundColor:"white",
        padding:"2rem"
    }
  });
  