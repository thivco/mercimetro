import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function DisplayResults(props) {
    const [newResults, setNewResults] = useState([]);

    useEffect(() => {
        if (props.results.records) {
            const updatedResults = props.results.records.map((record, index) => ({
                key: index,
                line: record.fields.res_com,
                name: record.fields.nom_zda,
            }));
            setNewResults(updatedResults);
        } else {
            setNewResults([]);
        }
    }, [props.results]);

    function addStation(key) {
        console.log(key)
    }

    return (
        <>
            {newResults.map((result) => (
                <p style={styles.resultText} key={result.key} onClick={() => addStation(result.key)}>
                    {result.line} - {result.name}
                </p>
            ))}
        </>
    );
}


const styles = StyleSheet.create({
    resultText: {
    }
});