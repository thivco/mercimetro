export default  function AllStations() {
    async function getData(){

        await fetch("https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring?MonitoringRef=STIF:StopPoint:Q:" + '473875' + ":", {
            headers: {
                method: 'GET',
          apikey: "tbEHQNRAi4VH7SY5aYWj4YhEKKSWgDQn"
        }
      })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // console.log(data.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.length)
        })
    }
        
    return(
        <>
     <p onClick={() => getData()}>BEAUCOUP DE STATIONS</p>
        </>
    )
}