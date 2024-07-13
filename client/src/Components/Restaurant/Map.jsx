import React from 'react';
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Map = (props) => {
    const position = [51.505, -0.09]
    return (
        <div className='h-auto w-80 md:w-96 shadow-lg '>
            <div className="p-2">
                <div className='text-2xl'>Call</div>
                <div className='text-lg  text-red-400'>+91 7984660111</div>
            </div>

            <div className=' p-2 pt-2'>
                <div className=' text-2xl'>Direction</div>
                <div className="w-full h-56">
                    <MapContainer
                        center={position}
                        zoom={13}
                        scrollWheelZoom={false}
                        className="h-full  z-0"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>huubvlyvy</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            {/* <div className="p-2">
                <div className='text-lg'>{props.direction}</div>
            </div> */}

            <div className='py-2'>
                <span className="copy px-2">
                    <button className='h-10 w-auto text-xl font-light border border-black text-center align-middle rounded-md '><span className='p-4'>Copy</span></button>
                </span>

                <span className="direction px-2">
                    <button className='h-10 w-auto text-xl font-light border border-black text-center align-middle rounded-md'><span className='p-4'>Direction</span></button>
                </span>
            </div>

        </div >
    )
}

export default Map