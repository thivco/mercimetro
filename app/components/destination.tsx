import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from "react-native";

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

  async function saveFavorite(lineID: string, destination: string) {
    // Recup les donnees, append la nouvelle entree, puis rafraichir la variable dans le storage
    let newFav = { line: lineID, destination: destination };
  
    try {
      const currentFavorites = await AsyncStorage.getItem("favorites");
      let favorites = [];
  
      if (currentFavorites) {
        try {
          favorites = JSON.parse(currentFavorites);
        } catch {
          console.log("Resetting (not the mole in Animal Crossing) the fav entry");
          favorites = [];
        }
      }
  
      favorites.push(newFav);
      console.log("Old favorites", await AsyncStorage.getItem("favorites"));
      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      console.log("Saved favorites", await AsyncStorage.getItem("favorites"));
    } catch {
      console.log("Error saving the favorite");
      
    }
  }

  return (
    <>
      <p className="stationDestination">{props.destinationInfo[0]}</p>
        <Text onPress={() => saveFavorite(props.line[2], props.destinationInfo[0])}>Fav</Text>
      <div className="stationNextTrains">
        <div className="stationNextTrain">
         <p> 1st </p><p className="stationNextTrainTimer">{displayTrain[0] != "" && displayTrain[0]}
        </p>
        </div>
      </div>
    </>
  );  
}
