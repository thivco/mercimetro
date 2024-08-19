export default function formatResults(rawResults: []) {
  let results = {};

    for (let i = 0; i < rawResults.records?.length; i++) {
      // On met une entree dans le tableau
      // On verifie d'abord que l'entree de la station n'existe pas dans le tableau
      let tempName = rawResults.records[i].fields.nom_zdc;
      if (
        !results[tempName])
      {
        // Alors on cree l'entree dans le tableau
        results = { ...results, [tempName] : [] };
      }
      // Puis on cree une entree dans le tableau par ligne
      let tempLine = rawResults.records[i].fields.res_com;
      let tempArray = [tempLine,rawResults.records[i].fields.idrefligc,rawResults.records[i].fields.id_ref_zda]
      results[tempName].push(tempArray)
      // premiere ligne de la station faite, next
      

      // stationLine : rawResults.records[i].fields.res_com,
      // // stationLineRef : rawResults.records[i].fields.idrefligc,
      // // stationName : rawResults.records[i].fields.nom_zdc,
      // nextDepartures
    }
  // console.log("La gueule des results", results);

  return results;
}
