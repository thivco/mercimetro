import GetNextTrain from "../server/getnexttrain";
import formatNextTrains from "../server/formatnexttrains";
import { useState } from "react";
import { Text } from "react-native";
import Destination from "./destination";


export default function Line(props:any){
  const [nextTrainsFormattedData, setNextTrainsFormattedData] = useState(undefined);
  const [lineDestinations, setLineDestinations] = useState(undefined)
  const [currentLineClass, setCurrentLineClass] = useState()
  const stationName = props.currentLine.stationName;
  const lineData = props.currentLine.line;

  
  
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
        <div className="stationLineOptions">
          <Text onPress={() => revealDestinations(lineData)}>
            <span className={lineData[0].replace(" ", "_")}>{lineData[0].replace(/(METRO)|(TRAIN)|(RER)/, "").replace("TRAM ", "T")}</span>
            <span className="stationLineName">{lineData[0]}</span></Text>
          {nextTrainsFormattedData && Object.entries(nextTrainsFormattedData[stationName][lineData[0]]).map((destination, index: any) => {
            console.log("Hello from the other side", destination)
            // setCurrentLineClass()
            return(
              <div className="stationDestinations">
              <Destination key={index} destinationInfo={destination}/>
              </div>
            )
          })}
        </div>
    )
}