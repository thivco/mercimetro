export default function Destination(station) {
    return(
        <>
        <p>{station.line} - {station.name} - {station.direction}</p>
        <p>1st train : {station.firststop}</p>
        <p>2nd train : {station.secondstop}</p>
        </>
    )
}