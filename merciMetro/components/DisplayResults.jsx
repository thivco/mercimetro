import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function SearchResults(props) {
    return (
        <>
        {props.results.map((result) => {
            return <p style={styles.resultText} key={result.name}>{result.line} - {result.name}</p>
        })}
        </>
    )
}    


const styles = StyleSheet.create({
    resultText: {
    }
  });