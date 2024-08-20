import { useState } from "react";

export default async function GetNextTrain(stationId: string) {
  console.log("Call api futurs arrets");
  console.log(stationId)
  return await fetch(
    "https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:" +
      stationId +
      ":",
    {
      headers: {
        method: "GET",
        apikey: "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn",
      },
    }
  ).then((response) => response.json());

  // .then(data => {
  //   // stationInfo.stationName = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value;
  //   // stationInfo.firstTrain = data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[0].MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime;
  //   // console.log(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[9].MonitoredVehicleJourney.MonitoredCall.StopPointName[0].value)
  //   // console.log(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.length)
  //   // return data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.length;
  //   setFutureDepartures(data)
  //   // return stationInfo
  // })
  // return "truc"
}
