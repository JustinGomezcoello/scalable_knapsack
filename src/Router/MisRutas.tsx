

import { Routes, Route, BrowserRouter, } from 'react-router-dom'

import { Contacto } from '../Components/Contacto'
import { Header } from '../Components/Layout/Header'
import { Footer } from '../Components/Layout/Footer'
import { Inicio } from '../Components/Inicio'
import { ProyectoFront } from '../Components/ProyectoFront'
import { ProyectoBack } from '../Components/ProyectoBack'



export const MisRutas = () => {
    return (

        <BrowserRouter>

            {/* Header y navegacion */}
            <Header />


            {/* contenido central */}
            <Routes>

                <Route path="/" element={<Inicio/> } />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/ProyectoFront" element={<ProyectoFront/>} />
                <Route path="/ProyectoBack" element={<ProyectoBack/>} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={(
                    <>
                        <h1>Error 404</h1>
                        <strong>esta pagina no existe </strong>
                    </>
                )} />

            </Routes>

            {/* Footer*/}

            <Footer />

        </BrowserRouter>
    )
}
