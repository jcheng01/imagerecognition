import React, { useState } from 'react'
import Ai from './Clarifai';

import axios from 'axios';


export default function GetUrl() {
    const clientID = "RmtG3x5m7IIMX1hYY04vqD-QFibuWtvfAFLfrgLzZNI";
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
    const [url, setUrl] = useState([])
    const loadimg = () => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data.urls.small);
                const url = response.data.urls.small;
                setUrl(url)
            })
            .catch(function (error) {
                console.log("Error: " + error);
            })
    }
    return (
        <div>
            <Ai img={url} loadimg={loadimg} />
        </div>
    );
}
