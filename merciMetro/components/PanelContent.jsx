import { StyleSheet, Text, View } from 'react-native';

export default function PanelContent(props) {
    let i = 0;
    return (
        <View style={styles.timestamps}>{
            props.infos.map((info) => {
                i++;
                return (
                    <View>
                        <p style={styles.trainNb}>{i == 1 ? "1ER" : "2ND"} <br/> TRAIN</p>
                        <p className='minutes' style={styles.timestampMinute} key={info.minutes}> {info.minutes} </p>
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
    timestamps: {
        display: "flex",
        flexDirection: "row",
        textAlign:"center",
        justifyContent: "space-evenly",
        width:"100%"
    },
    trainNb : {
        color:"yellow",
        fontSize:"2rem",
        fontFamily:"Arial",
        textAlign:"center",
        wordBreak:"break-all"
    }
})