import React from 'react'
import './App.css';
import YupInputs from "./Components/YupInputs";
import Hooks from "./Components/Hooks";
import Formik from "./Components/Formik";
import MapTest from "./Components/MapTest/MapTest";
import TextEditor from "./Components/TextEditor/TextEditor";
import Wysiwyg from "./Components/TextEditor/Wysiwyg";

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
                {/*<YupInputs />*/}
                {/*<Hooks />*/}
                {/*<Formik />*/}
                {/*<TextEditor />*/}
                <Wysiwyg />
                {/*<MapTest />*/}
            </>
        )
    }

}

export default App;
