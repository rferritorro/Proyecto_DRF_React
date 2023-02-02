import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStation } from "../../hooks/useStation";

const CreateStation = (props) => {
    const [name, setName] = useState()
    const [url, setUrl] = useState()
    const {createStation} = useStation();
    const navigate = useNavigate();
    console.log(props)
    if (!props.newStation) {
        return null
    }
    const data = {
        "id": props.data?.length + 1,
        "name": name,
        "long": props.add?.lng,
        "lat": props.add?.lat,
        "img": url,
    }
    const submit = () => {
        createStation(data)
        navigate('/about')
    }
    
    return (
        <div className="m-3">
            <strong>NAME OF STATION: </strong>
            <input type={"text"} id="name" onChange={event => setName(event.target.value)}/><p></p>
            <strong>IMAGE OF STATION: </strong>
            <input type={"url"} id="img" onChange={event => setUrl(event.target.value)}/><p></p>
            <strong>*SPECIFY IN THE MAP DIRECTION OF NEW STATION*</strong><p></p>
            <input type={"text"} value={props.add?.lng}/>&nbsp;
            <input type={"text"} value={props.add?.lat}/><p></p>
            <input type={"button"}  value={"Add"} onClick={submit}/>
            
        </div>
    )
}

export default CreateStation