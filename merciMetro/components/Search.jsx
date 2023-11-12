import { useState, useEffect, useRef } from "react";

export default function searchBar() {
    const [results, setResults] = useState([]);
    const searchTerm = useRef("")
    function handleSearchType() {
        if (searchTerm.current.value.length > 3) {
            fetch("https://data.iledefrance-mobilites.fr/api/records/1.0/search/?rows=40&sort=res_com&q=" + searchTerm.current.value + "&location=8,48.69888,2.33131&basemap=jawg.streets&start=0&fields=geo_point_2d,geo_shape,id_ref_zdc,nom_zdc,id_ref_zda,nom_zda,mode,tertrain,terrer,termetro,tertram,terval,idrefliga,idrefligc,indice_lig,res_com,exploitant,idf,principal,x,y&dataset=emplacement-des-gares-idf&timezone=Europe/Berlin&lang=fr")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    for (let i = 0; i < data.records.length; i++) {
                        results[i] = {
                            "line": data.records[i].fields.res_com,
                            "name": data.records[i].fields.nom_zda,
                        }
                    }
                    console.log(results)
                    // console.log(dataaaa.fields.res_com, "=>", dataaaa.fields.nom_zda)
                })
                
        }
    }

    const returnResults = () => {
        console.log("teub dedans")
        return (
            results.map((result) => {
                return <p key={result.name}>{result.line} - {result.name}</p>
            })
        )
    }
    return (
        <>
            <input ref={searchTerm} type="search" onChange={() => handleSearchType()} />
            {/* <button onClick={handleSearchType}>Search</button> */}
            {/* {searchTerm.current.value.length > 3 ? <returnResults/> : ""} */}
            {() => returnResults()}
        </>
    )
}