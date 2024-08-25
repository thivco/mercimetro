import { Text } from "react-native";
import { useState } from "react";
import Line from "./line";
import { View } from "react-native-reanimated/lib/typescript/Animated";


export default function Station(props: any) {
  const [stationLines, setStationLines] = useState(undefined)
  const [stationDestinations, setStationDestinations] = useState(undefined)
  const [nextTrainsTimer, setNextTrainsTimer] = useState({})
  const { stationName, stationData } = props.currentStation;


  function revealLines(stationData) {
    stationLines != undefined ? setStationLines(undefined) : setStationLines(stationData)
  }


  // function pressLine(line){
  //   revealNextArrivals(line[0], line[2], line[1])
  // }

  // First, we need to parse through the different results. We only need the 2 first results


  // Then for those two, we would need to return the time.
  // Then somewhere along the line, we need to return the time in a state. That state needs to be updated every 1 second to remove 1000 millisec so that the components refreshes
  // Finally, every one min, we need to check if the value is still accurate

  // console.log("Station data", stationData, "station Name", stationName);

  return (
    <div className="station">
      <Text
      onPress={() => revealLines(stationData)}
      key={props.index}
      >
        <span className="stationName">
        {stationName}
        </span>
      </Text>
      {/* <br /> */}
      {stationLines && stationData.map((line, index) => {
        console.log("index", index);
        return (
          <>
            <br />
            <Line key={index} currentLine={{ line, stationName }} />
          </>
        )
      })}
      {/* <br /> <br /> */}
    </div>
  );
}
