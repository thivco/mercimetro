import Panel from "./components/destination";
import Favorites from "./components/favorites";
import AllStations from "./components/allstations";
import { Text, View } from "react-native";
import { useState } from "react";

export default function Timetable() {
  // Placeholder
  // const list : string[];
  // Less do sometimes be more
  const [isFavoriteSelected, setIsFavoriteSelected] = useState("false")
  
  function selectCurrentView(bool:boolean){
    // setIsFavoriteSelected(bool)
    console.log(bool)
    console.log(isFavoriteSelected, "couocuo")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isFavoriteSelected == "yes" ? <Favorites/> : <AllStations/>}
      <p onClick={() => setIsFavoriteSelected("yes")}>Favorites</p>
      <p onClick={() => setIsFavoriteSelected("no")}>All the stations</p>
      <h1>Have a look at your pinned station's timetables, or search among all our existing stations !</h1>
            {/*  Here we will map through all the favorites in one tab, and all the existing lines of train/bus in the other*/}
            {
                        // list.map((station, index) => <Panel station={list} />)

            }
    </View>
  );
}
