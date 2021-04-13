import React from 'react'
import './App.css';
import {DndProvider} from "react-dnd";
import {isMobile} from "react-device-detect";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import YupInputs from "./Components/YupInputs";
import Hooks from "./Components/Hooks";
import MapTest from "./Components/MapTest/MapTest";
import Wysiwyg from "./Components/TextEditor/Wysiwyg";
import Test from "./Components/Test";
import SignupForm from "./Components/Formik";
import Print from "./Components/Print/Print";
import Search from "./Components/Search/Search";
import CameraPhoto from "./Components/CameraPhoto/CameraPhoto";
import QrScanner from "./Components/QrScanner/QrScanner";
import QrGenerator from "./Components/QrGenerator/QrGenerator";
import InputForm from "./Components/Input/InputForm";
import PhotoGallery from "./Components/PhotoGallery/PhotoGallery";
import Dnd from "./Components/Dnd/Dnd";
import BeautifulDnd from "./Components/BeautifulDnd/BeautifulDnd";

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
                {/*<YupInputs />*/}
                {/*<Hooks />*/}
                {/*<SignupForm />*/}
                {/*<TextEditor />*/}
                {/*<Wysiwyg />*/}
                {/*<Test />*/}
                {/*<MapTest />*/}
                {/*<Print />*/}
                {/*<QrGenerator />*/}
                {/*<InputForm />*/}

                {/*<DndProvider backend={ isMobile ? TouchBackend : HTML5Backend}>*/}
                {/*    <Dnd />*/}
                {/*</DndProvider>*/}

                {/*<BeautifulDnd />*/}

                {/*<PhotoGallery />*/}
                {/*<CameraPhoto />*/}
                <Search />
                {/*<QrScanner />*/}
            </>
        )
    }

}

export default App
