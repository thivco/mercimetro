import { useState } from "react";
import GetNextTrain from "./getnexttrain";

export default async function search(searchString: string) {
  // const [nextTrains, setNextTrains] = useState()
  // const [stationList, setStationList] = useState([]);

  // On verra plus tard
    // async function handleClick(thing: string) {
    //   truc = await GetNextTrain(thing);
    // }

  // Formats data in elements of a list that will be returned to the index component
  // function formatData(data: any) {
  //   return (
  //     <>
  //       {data.records.map((station, index) => (
  //         <li
  //           key={index}
  //           onClick={() => handleClick(station.fields.id_ref_zdc)}
  //         >
  //           {station.fields.res_com} = {station.fields.nom_zdc} <br/>
  //           {station.fields.id_ref_zdc} - {truc.firstTrain}
  //         </li>
  //       ))}
  //     </>
  //   );
  // }

  // Search stations in the dataset
  return await fetch(
    "https://data.iledefrance-mobilites.fr/api/records/1.0/search/?rows=40&sort=res_com&q=" +
      searchString +
      "&dataset=emplacement-des-gares-idf&timezone=Europe/Berlin&lang=fr"
  )
    // .then((data) => console.log("Stp mdr", data.json()))
    .then((response) => response.json())
    // console.log(stationList)
}
