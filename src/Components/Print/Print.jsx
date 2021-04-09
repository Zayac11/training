import React from 'react'
import Printer, { print } from 'react-pdf-print'
import ReactToPrint from 'react-to-print';
import s from './Print.module.scss'
import ComponentToPrint from "./ComponentToPrint";

class Print extends React.PureComponent {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => {
                        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                        // to the root node of the returned component as it will be overwritten.
                        return <a href="#">Print this out!</a>;
                    }}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}

export default Print