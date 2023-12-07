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
      <View>
        <Text>Metro is down !</Text>
      </View>
    )
  }
  else {

    return (
      <View>
        <View>
          <Text>Ligne 7</Text>
          <Text> - <span>{infos["station"] ? infos["station"] : "Truc"}</span></Text>
        </View>
        <Text>Direction <span>{infos["destination"] ? infos["destination"] : "Truc"}</span></Text>
        <View>
          <PanelContent infos={infos} />
        </View>
      </View>
    );
  }
}
