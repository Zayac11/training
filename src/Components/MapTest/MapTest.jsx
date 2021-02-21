import React from 'react'
import {compose} from "redux";
import {YMaps, Map, TypeSelector, SearchControl, RouteButton, ZoomControl, Placemark} from 'react-yandex-maps';
import s from './MapTest.module.css'

const MapTest = (props) => {


    return (
        <div>
            <YMaps>
                <div>
                    {/*map чи шо*/}
                    <Map className={s.map}
                        defaultState={{ center: [55.75, 37.57], zoom: 16 }} >
                        <Placemark defaultGeometry={[55.75, 37.58]}
                                   defaultProperties={{iconCaption: 'Стадион тут'
                                   }}
                                   defaultOptions={{preset: "islands#dotIcon",
                                       iconColor: 'blue',
                                   }}
                                   />
                        <Placemark defaultGeometry={[55.75, 37.57]}
                                   defaultProperties={{iconCaption: 'Стадион тут'
                                   }}
                                   defaultOptions={{preset: "islands#dotIcon",
                                       iconColor: 'blue',
                                   }}
                                   />
                        <Placemark defaultGeometry={[55.76, 37.58]}
                                   defaultProperties={{iconCaption: 'Стадион тут'
                                   }}
                                   defaultOptions={{preset: "islands#dotIcon",
                                       iconColor: 'blue',
                                   }}
                                   />
                        <Placemark />
                        <ZoomControl defaultOptions={{size: "large"}}/>
                        <TypeSelector />

                    </Map>
                </div>
            </YMaps>
        </div>
    )
}

export default compose(

)(MapTest)
