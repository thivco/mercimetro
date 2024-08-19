import moment from "moment/moment";
import { Directions } from "react-native-gesture-handler";

export default function formatNextTrains(
  stationName: string,
  lineName: string,
  nextTrainsRawData: any,
  lineCode: string,
  nextTrainsFormattedData: any
) {
  nextTrainsFormattedData = {
    ...nextTrainsFormattedData,
  };
  let count = 0;
  for (
    let i = 0;
    i <
    nextTrainsRawData.Siri?.ServiceDelivery.StopMonitoringDelivery[0]
      .MonitoredStopVisit.length;
    i++
  ) {
    // console.log("Data pre error", nextTrainsRawData, i);
    let formattedLine =
      nextTrainsRawData.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[
        i
      ].MonitoredVehicleJourney.LineRef.value.replaceAll(":", "");
    formattedLine = formattedLine.replaceAll("STIFLine", "");
    // console.log(formattedLine);

    if (formattedLine == lineCode) {
      // console.log(lineCode, "Nous y sommes");

      // let formattedLine =
      //   nextTrainsRawData.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit[
      //     i
      //   ].MonitoredVehicleJourney.LineRef.value.replaceAll(":", "");
      let destinationId =
        nextTrainsRawData.Siri.ServiceDelivery.StopMonitoringDelivery[0]
          .MonitoredStopVisit[i].MonitoredVehicleJourney.MonitoredCall
          .DestinationDisplay[0].value;
      // console.log("ID Ligne :", formattedLine.replaceAll("[a-zA-Z]", ""));
      // console.log("Nom de destination :", destinationId);
      let tmpTime = moment(
        nextTrainsRawData.Siri.ServiceDelivery.StopMonitoringDelivery[0]
          .MonitoredStopVisit[i].MonitoredVehicleJourney.MonitoredCall
          .ExpectedDepartureTime
      );
      let diff = tmpTime.diff(moment());

      if (diff > 0) {
        // console.log("Diff", nextTrainsFormattedData);
        if (nextTrainsFormattedData[stationName] == undefined) {
          nextTrainsFormattedData = {
            ...nextTrainsFormattedData,
            [stationName]:[],
          };
        }
        if (nextTrainsFormattedData[stationName][lineName] == undefined) {
          nextTrainsFormattedData[stationName] = {
            ...nextTrainsFormattedData[stationName],
            [lineName]:[],
          };
        }
        // console.log("Data pour check", nextTrainsFormattedData, lineName, destinationId);
      if(nextTrainsFormattedData[stationName][lineName][destinationId] == undefined){
        nextTrainsFormattedData[stationName][lineName] = {
          ...nextTrainsFormattedData[stationName][lineName],
        [destinationId] : []
        }
      }

      
      nextTrainsFormattedData[stationName][lineName][destinationId].push(diff)
       
      //   nextArrivals: {
        //     [formattedLine]: {
        //       [destinationId]: []
        //     },
        //   },
        // };
        //   Ici refaire le tableau et faire en sorte que les tableaux se separent direct en fonction des lignes
        // {stations:
        // {station:[ligne]:[
        //     [direction]:[
        //         count
        //     ]
        // ]}}
        //   destination:
        //     nextTrainsRawData.Siri.ServiceDelivery.StopMonitoringDelivery[0]
        //       .MonitoredStopVisit[i].MonitoredVehicleJourney.DestinationName[0]
        //       .value,
        //   remaining: tmpTime.diff(moment()),
        //   minutes: moment.duration(diff).minutes(),
        //   seconds: moment.duration(diff).seconds(),
        // });
        count++;
      }
      // If we only want the 2 first stations
      // if(count=>2){
      //     i = 10000;
      // }
    }
  }
  console.log("Please ?", nextTrainsFormattedData);

  return nextTrainsFormattedData;
}
