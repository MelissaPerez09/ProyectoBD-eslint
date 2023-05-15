import { useState } from 'react'
import './Incidence.css'

function Incidence(){

    //muestra la informacion en la interfaz
    return (
        <div className="incindence-mainpage-root">
            <div className='contenedor'>
                <form id='dpi_paciente' action='' method='post'>
                    <h3>Expediente del paciente</h3>
                    <fieldset>
                        <input id="input-dpi" placeholder='DPI del paciente' type='text'></input>
                    </fieldset>
                </form>
                <button className="buscar" >Buscar</button>
                <div id="status" className="status-message"></div>

                <div className='detalles'>
                        <div>
                            <h4>No. expediente: </h4>
                            <div id="noExpediente" className="cadaDetalle" >
                            </div>

                            <h4>Fecha: </h4>
                            <div id="fecha" className="cadaDetalle">
                            </div>

                            <h4>Hora: </h4>
                            <div id="hora" className="cadaDetalle">
                            </div>

                            <h4>Enfermedades padecidas: </h4>
                            <div id="enfermedades" className="cadaDetalle">
                            </div>

                            <h4>Examenes realizados: </h4>
                            <div id="examenes" className="cadaDetalle">
                            </div>

                            <h4>Hospital que visitó: </h4>
                            <div id="hospitales" className="cadaDetalle">
                            </div>

                            <h4>Doctor que le atendió: </h4>
                            <div id="doctores" className="cadaDetalle">
                            </div>

                            <h4>Medicamentos suministrados: </h4>
                            <div id="medicinas" className="cadaDetalle">
                            </div>

                            <h4>Status del paciente: </h4>
                            <div id="statusDelPaciente" className="cadaDetalle">
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Incidence