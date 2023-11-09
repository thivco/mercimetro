import { StyleSheet, Text, View } from 'react-native';

export default function PanelContent(props) {
    let i = 0;
    return (
        <View style={styles.timestamps}>{
        props.infos.map((info) => {
            i++;
            return (
                <View>
                    <p>{i} train</p>
                    <p style={styles.timestampMinute} key={info.minutes}> {info.minutes} </p>
                </View>
            )
        })}
        </View>
    )
}
const styles = StyleSheet.create({
    timestampMinute: {
        fontWeight: "bolder",
        fontSize: "5rem",
        color: "yellow",
        fontFamily: "Arial"
    },
    timestamps : {
        display:"flex",
        flexDirection:"row"
    }
})