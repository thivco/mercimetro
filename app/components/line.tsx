import GetNextTrain from "../server/getnexttrain";
import formatNextTrains from "../server/formatnexttrains";
import { useState } from "react";
import { Text } from "react-native";
import Destination from "./destination";


export default function Line(props:any){
  const [nextTrainsFormattedData, setNextTrainsFormattedData] = useState(undefined);
  const stationName = props.currentLine.stationName;
  const lineData = props.currentLine.line;
  const [lineDestinations, setLineDestinations] = useState(undefined)
  
  
  function revealDestinations(lineData) {
    // if(lineDestinations == undefined){
      //   revealNextArrivals(lineData[0], lineData[1], lineData[2])
      // }
      lineDestinations != undefined ? setLineDestinations(undefined) : revealNextArrivals(lineData[0], lineData[1], lineData[2])
      console.log("Current state", lineDestinations, "Data", nextTrainsFormattedData);
  }
    async function revealNextArrivals(lineName: string,  lineCode: string , stationCode: string) {
        let nextTrainsRawData = await GetNextTrain(lineData[2]);
        setNextTrainsFormattedData(
          formatNextTrains(stationName, lineName, nextTrainsRawData, lineCode, nextTrainsFormattedData)
        );
      }

      // {nextTrainsFormattedData && console.log("Ca doit etre defini lol", nextTrainsFormattedData[stationName][lineData[0]])}
    return (
        <>
          <Text onPress={() => revealDestinations(lineData)}><span className="stationLineOptions">{lineData[0]} </span></Text>
          {nextTrainsFormattedData && Object.entries(nextTrainsFormattedData[stationName][lineData[0]]).map((destination, index: any) => {
            console.log("Hello from the other side", destination)
            return(
              <div className="stationDestinations">

              <Destination key={index} destinationInfo={destination}/>
              </div>
            )
          })}
        </>
    )
}