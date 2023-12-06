import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function DisplayResults(props) {
    const [newResults, setNewResults] = useState([])
    useEffect(() => {
        if (props.results.records) {
            if (props.results.records.length < newResults.length) {
                setNewResults(["zizi"])
            }
            for (let i = 0; i < props.results.records.length; i++) {
                newResults[i] = {
                    "key": i,
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
    }, [props.results])
    return (
        <>
        <p>Hello la streetzer</p>
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