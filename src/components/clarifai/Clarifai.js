import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Logo from "../logofolder/Logo";
import "./Clarifai.scss"

export default function Ai(props) {
    const MODEL_ID = 'general-image-recognition';
    const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';
    const PAT = 'dbf2833a0ef14dad9f1162841c2bb1e9';
    const USER_ID = 'justintbc8';
    const APP_ID = 'my-first-application';
    const IMAGE_URL = props.img;
    const [imgdata, setImgData] = useState([])
    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    const endpoint = `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`;
    const ai = () => {
        fetch(endpoint, requestOptions)
            .then((data) => data.json())
            .then((data) => {
                console.log(data.outputs[0].data.concepts)
                setImgData(data.outputs[0].data.concepts)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div className="body">
            <div className="colone">
                <Logo />
                <Buttons ai={ai} img={props.loadimg} />
            </div>
            <div className="coltwo">
                <div className="img">
                    <img id='unsplashedImage' alt="load img" src={IMAGE_URL} />
                </div>
                <div className="data">
                    {imgdata.map(record => {
                        return (
                            <div>
                                {(record.value * 100).toFixed(1) + "%"}
                                {(record.name).charAt(0).toUpperCase() + record.name.slice(1)}
                            </div>

                        )
                    })}
                </div>

            </div>
        </div>
    )
}
