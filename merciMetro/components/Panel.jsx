import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import moment from 'moment/moment';
import PanelContent from "./PanelContent.jsx"

export default function Panel(props) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [url, setUrl] = useState();
  const [infos, setInfos] = useState([])

  useState(async () => {
    await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:" + props.stationID + ":", {
      headers: {
        method: 'GET',
        apikey: "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"
      }
    })
      .then(response => response.json())
      .then(data => {
        infos["station"] = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value

        infos["destination"] = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.DestinationName[0].value;
        for (let i = 0; i < data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.length; i++) {
          let tmpTimestamp = moment(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[i].MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)
          let diff = tmpTimestamp.diff(moment());
          infos[i] = {
            "remaining": tmpTimestamp.diff(moment()),
            "minutes": moment.duration(diff).minutes(),
            "seconds": moment.duration(diff).seconds()
          }

          // const tmpTimestamp = 
          // infos["minutes"+i] = moment.duration(diff).minutes();
          // infos["secondes"+i] = moment.duration(diff).seconds();

        }
        console.log(infos)

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
          <PanelContent infos={infos} />
          {/* <View style={styles.singleTimestamp}>
            <Text style={styles.welcomeText}>1st train</Text>
            <Text style={styles.welcomeText}><span style={styles.minutesRemaining}>{infos["minutes0"]}</span> min</Text>
          </View>
          <View style={styles.singleTimestamp}>
            <Text style={styles.welcomeText}>2nd train</Text>
            <Text style={styles.welcomeText}><span style={styles.minutesRemaining}>{infos["minutes1"]}</span> min</Text>
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    color: "yellow",
  },
  panelTitle: {
    display: "flex",
    flexDirection: "row"
  },
  timestamps: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    justifyContent: "center"
  },
  singleTimestamp: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  panel: {
    backgroundColor: "black",
    width: "90%"
    // padding:"2rem"
  }
});
