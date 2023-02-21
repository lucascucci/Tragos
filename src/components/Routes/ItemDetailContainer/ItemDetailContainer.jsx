import './itemDetailContainer.css'
import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [data,setData] = useState([])
    const {id} = useParams()
    

    useEffect(() => {
        const querydb = getFirestore ()
        const queryDoc = doc(querydb,"tragos",id) 
        getDoc (queryDoc)
        .then (res=> setData({id:res.id,...res.data()}))
    },[id])

    
    return(
        <div>
            < ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;

