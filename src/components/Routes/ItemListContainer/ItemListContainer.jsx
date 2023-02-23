import ItemList from "../../ItemList/ItemList";
import { useState,useEffect } from "react";

import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore";

const ItemListContainer = () => {

    const [data, setData] = useState([])
    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection (querydb,"tragos")
        if (categoriaId){
            const queryFilter = query(queryCollection,where("categoria","==,categoriaId"))
            getDocs(queryFilter)
            .then(res=> setData(res.docs.map(data=>({id:data.id,...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then (res=> setData(res.docs.map(data=>({id:data.id,...data.data()}))))
        }
        
    },[categoriaId])

    return <ItemList data={data} /> 
}

export default ItemListContainer;