export default function Destination(props:any) {
    let firstTrain = new Date(props.destinationInfo[1][0])
    let secondTrain = new Date(props.destinationInfo[1][1])
    // let firstTrain = new Date(props.destinationInfo[1][0]).getMinutes() + ":" + new Date(props.destinationInfo[1][0]).getSeconds()
    // let secondTrain = new Date(props.destinationInfo[1][1]).getMinutes() + ":" + new Date(props.destinationInfo[1][1]).getSeconds()
    let train = props.destinationInfo[1]
    // for(let i = 0; i<2; i++){
    //     train[i] = new Date(train[i])
    // }
    setInterval(() => {
        
        for(let i = 0; i<2; i++){
            console.log("index", i);
            
            train[i] = reduceTime(train[i])
            // console.log("train en cours mdr", train[i]);
            train[i] = new Date(train[i])
            console.log("Temps restant : ", train[i].getSeconds());
        }
    }, 1000);

    function reduceTime (milliseconds){
        // console.log("Milliseconds", new Date(milliseconds).getSeconds());
        return milliseconds - 1000;
    }

    return(
        <>
            <p>{props.destinationInfo[0]}</p>
            <p>1st train <br /> {train[0].getSeconds()}</p>
            <p>2nd train <br /> {train[1].getSeconds()}</p>
        </>
    )
}