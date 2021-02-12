import React from 'react'
import './App.css';
import YupInputs from "./Components/YupInputs";
import Hooks from "./Components/Hooks";
import Formik from "./Components/Formik";
import MapTest from "./Components/MapTest/MapTest";

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
                {/*<YupInputs />*/}
                {/*<Hooks />*/}
                <Formik />

                {/*<MapTest />*/}
            </>
        )
    }

}

export default App;
