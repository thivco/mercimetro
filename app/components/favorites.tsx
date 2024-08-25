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

    async function removeFromFavorite(arrayIndex : number){
        try{
            const currentFavorites = await AsyncStorage.getItem("favorites") 
            let tempFav = JSON.parse(currentFavorites)
            // tempFav = await AsyncStorage.getItem("favorites")
            console.log(tempFav, arrayIndex);
            tempFav.splice(arrayIndex, 1)
            console.log(tempFav, arrayIndex);
            setCurrentFavorites(tempFav)   
        }
        catch{
            console.log("Error whene deleting an element");
            
        }
    }
    // getFavorites()

    return(
        <>
        <p>Test favoris</p>
        {/* En vrai ca serait mieux de faire la regeneration au clic sur favorites, mais bon.................. */}
        <Text onPress={() => getFavorites()}>Regenerate favorites</Text>
            {currentFavorites && currentFavorites.map((favorite, index) => {
                return (
                    <div key={index}>
                    <p>DESTINATION : {favorite.destination}</p>
                    <Text onPress={()=>removeFromFavorite(index)}>Remove from favorites</Text>
                    </div>
                )
                
            })}        
        </>
    )
}