import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function DisplayResults(props) {
    const [newResults, setNewResults] = useState([])
    useEffect(() => {
        console.log("Results from the other side", props.results)
        if(props.results.records){
        if(props.results.records.length < newResults.length){
            console.log(props.results.records.length, "les nouveaux", newResults.length, "les anciens")
            setNewResults(["zizi"])
            console.log("after purge", newResults)
        }
            for (let i = 0; i < props.results.records.length; i++) {
                newResults[i] = {
                    "key":i,
                    "line": props.results.records[i].fields.res_com,
                    "name": props.results.records[i].fields.nom_zda,
                }
                setNewResults(newResults)
            }
        }
        else {
            setNewResults([])
        }
        
        // setNewResults(props.results)
    },[props.results])
    console.log("NEW results from the other side", newResults)
    return (
        <>
        {newResults.map((result) => {
            return <p style={styles.resultText} key={result.key}>{result.line} - {result.name}</p>
        })}
        </>
    )
}    


const styles = StyleSheet.create({
    resultText: {
    }
  });