import React, { useState } from 'react'
import Ai from './clarifai/Clarifai';
import axios from 'axios';

export default function GetUrl() {
    const clientID = "RmtG3x5m7IIMX1hYY04vqD-QFibuWtvfAFLfrgLzZNI";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
    const [url, setUrl] = useState(["https://images.unsplash.com/photo-1667307450467-79ccf8e172df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkxODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njg4MDg4NjY&ixlib=rb-4.0.3&q=80&w=400"])
    const loadimg = async () => {
        const response = await axios.get(endpoint)
        console.log(response.data.urls.small);
        const url = response.data.urls.small;

        setUrl(url)

        await (function (error) {
            console.log("Error: " + error);
        })
    }
    return (
        <div>
            <Ai img={url} loadimg={loadimg} />
        </div>
    );
}

