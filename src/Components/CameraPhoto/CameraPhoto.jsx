import React, {useState} from "react";
import 'react-html5-camera-photo/build/css/index.css';
import Camera from 'react-html5-camera-photo';

const CameraPhoto = (props) => {

    const [photo, setPhoto] = useState('')

    function handleTakePhoto (dataUri) {
        setPhoto(dataUri)
        console.log('takePhoto');
    }

    return (
        <>
            <Camera
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            />
            {
                photo !== '' &&
                    <div>
                        <img src={photo} alt="photo"/>
                    </div>
            }
        </>
    )
}

export default CameraPhoto
