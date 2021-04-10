import React, {useState} from "react";
import 'react-html5-camera-photo/build/css/index.css';
import Camera, {FACING_MODES} from 'react-html5-camera-photo';

const CameraPhoto = (props) => {

    const [photo, setPhoto] = useState('')

    function handleTakePhoto (dataUri) {
        setPhoto(dataUri)
        console.log('takePhoto');
    }

    console.log(FACING_MODES.ENVIRONMENT)
    return (
        <>
            <Camera
                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                isFullscreen = {false}
                isImageMirror={false}
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
