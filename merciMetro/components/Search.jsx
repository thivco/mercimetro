import { useState, useEffect, useRef } from "react";

export default function searchBar(){
    const searchTerm = useRef("")
    function handleSearchType() {
        fetch("https://data.iledefrance-mobilites.fr/api/records/1.0/search/?rows=40&sort=res_com&q="+searchTerm.current.value+"&location=8,48.69888,2.33131&basemap=jawg.streets&start=0&fields=geo_point_2d,geo_shape,id_ref_zdc,nom_zdc,id_ref_zda,nom_zda,mode,tertrain,terrer,termetro,tertram,terval,idrefliga,idrefligc,indice_lig,res_com,exploitant,idf,principal,x,y&dataset=emplacement-des-gares-idf&timezone=Europe/Berlin&lang=fr")
          .then(response => response.json())
          .then(data => console.log(data))

    }
    return(
        <>
        <input ref={searchTerm} type="search" onChange={() => console.log("test", searchTerm.current.value)} />
        <button onClick={handleSearchType} >Search</button>
        </>
    )
}