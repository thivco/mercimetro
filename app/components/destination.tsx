import { useState } from "react";

export default function Destination(props: any) {
  const [displayTrain, setDisplayTrain] = useState([]);

  let train = props.destinationInfo[1];
  let tempTrains = ["", ""];
  setTimeout(() => {
    console.log("teste");
    for (let i = 0; i < 2; i++) {
      train[i] = reduceTime(train[i]);
      console.log("Temps restant : ", displayTrain[i]);
      tempTrains[i] =
        new Date(train[i]).getMinutes() + ":" + new Date(train[i]).getSeconds();
    }
    setDisplayTrain(tempTrains);
  }, 1000);

  function reduceTime(milliseconds) {
    // console.log("Milliseconds", new Date(milliseconds).getSeconds());
    return milliseconds - 1000;
  }

  return (
    <>
      <p className="stationDestination">{props.destinationInfo[0]}</p>
      <div className="stationNextTrains">
        <div className="stationNextTrain">
         <p> 1st </p><p className="stationNextTrainTimer">{displayTrain[0] != "" && displayTrain[0]}
        </p>
        </div>
      </div>
    </>
  );
}
