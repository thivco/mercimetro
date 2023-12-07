import { StyleSheet, Text, View } from 'react-native';

export default function PanelContent(props) {
    let i = 0;
    return (
        <View>{
            props.infos.map((info) => {
                i++;
                return (
                    <View>
                        <p>{i == 1 ? "1ER" : "2ND"} <br/> TRAIN</p>
                        <p className='minutes' key={info.remaining}> {info.minutes} </p>
                    </View>
                )
            })}
        </View>
    )
}
