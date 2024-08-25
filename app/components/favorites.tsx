import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Text } from 'react-native';

export default function Favorites() {
    
    const [currentFavorites, setCurrentFavorites] = useState(undefined)

    async function getFavorites(){
        let tempFav = await AsyncStorage.getItem("favorites")
        setCurrentFavorites(JSON.parse(tempFav))
        console.log("Temp favorites", JSON.parse(tempFav));
    }
    // getFavorites()

    return(
        <>
        <p>Test favoris</p>
        {/* En vrai ca serait mieux de faire la regeneration au clic sur favorites, mais bon.................. */}
        <Text onPress={() => getFavorites()}>Regenerate favorites</Text>
            {currentFavorites && currentFavorites.map((favorite, index) => {
                return (
                    <p>DESTINATION : {favorite.destination}</p>
                )
                
            })}        
        </>
    )
}