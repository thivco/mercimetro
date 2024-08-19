import GetNextTrain from "../server/getnexttrain";
import formatNextTrains from "../server/formatnexttrains";
import { useState } from "react";

export default function Line(props:any){
    const [nextTrainsFormattedData, setNextTrainsFormattedData] = useState(undefined);


    async function revealNextArrivals(lineName: string, stationCode: string, lineCode: string) {
        let nextTrainsRawData = await GetNextTrain(stationCode);
        setNextTrainsFormattedData(
          formatNextTrains(props.stationName, lineName, nextTrainsRawData, lineCode, nextTrainsFormattedData)
        );
      }


    return (
        <>
        <p>{props.stationName && props.stationName}</p>
        </>
    )
}