import React from 'react'
import './App.css';
import YupInputs from "./Components/YupInputs";
import Hooks from "./Components/Hooks";
import MapTest from "./Components/MapTest/MapTest";
import Wysiwyg from "./Components/TextEditor/Wysiwyg";
import Test from "./Components/Test";
import SignupForm from "./Components/Formik";
import Print from "./Components/Print/Print";

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
                <Print />
            </>
        )
    }

}

export default App;
