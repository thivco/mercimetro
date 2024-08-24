import { Button, Text, View } from "react-native";
import { useState } from "react";
import search from "../server/search";
import { useRef } from "react";
import { Ref } from "react";
import formatResults from "../server/formatresults";
import Station from "../components/station";
import "../../assets/style/style.scss"

export default function Tab() {
  const [station, setStation] = useState("");
  const [results, setResults] = useState([]);
  const [searchBarClass, setSearchBarClass] = useState("searchBar");

  // const searchString = useRef();

  // async function handleClick(thing: string) {
  //   // console.log(thing);
  //   let nextTrainsRawData = await GetNextTrain(thing);
  //   // console.log(nextTrainsRawData);
  //   let nextTrainsFormattedData = formatNextTrains(nextTrainsRawData, results, thing);
  //   // console.log("Putain de legende", nextTrainsFormattedData)
  // }
  // console.log('is this set ?', results)
  const handleResult = async (e) => {
    setStation(e.target.value);
    // console.log("Ancien :", e.target.value, "Nouveau :", station)
    setResults([]);

    if (e.target.value.length > 3) {
      let res = await search(e.target.value);
      // On passe la valeur de la barre de recherche a la fonction search qui retourne la liste des stations contenant la valeur
      // Ensuite, on affiche les resultats
      // Chaque resultat est cliquable. Si on clique sur ce resultat, on va faire une recherche avec son nom de code pour obtenir les prochains trains/bus
      // Les prchains departs apparaissent au clic
      // On doit pouvoir reutiliser les fonctions dans d'autres composants
      // La seconde fonction qui donne les resultats doit etre independante de la recherche pour les favoris
      // console.log("results =>", res)
      // console.log("Premiere recheerchhe", res);
      res = formatResults(res);
      setResults(res);
      // Object.entries(res).map((station, index) => {
      //   console.log("Station mapped", station),
      //   console.log("Index mapped", index)
      // }
      // )
      setSearchBarClass("searchBarActive")
      
      // return res;
    }
    else {
      setSearchBarClass("searchBar")

    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
      className={searchBarClass}
        type="text"
        placeholder="Search a line, a station"
        onChange={handleResult}

      />
      {Object.entries(results).map(([stationName, stationData], index: any) => {
        console.log("Index", index, "Name", stationName, "data", stationData, 'results', results);
        return (
          <Station key={index} currentStation={{stationName, stationData}} allStations={results} index={index}/>
        );
      })}
      {/* {Object.keys(results)} */}
    </View>
  );
}
