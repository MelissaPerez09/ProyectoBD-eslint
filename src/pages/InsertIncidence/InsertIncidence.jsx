import { useState, useEffect } from 'react'
import './Insert_Incidence.css'

function InsertIncidence(){
    return (
        <div className="insert-incindence-mainpage-root1" style={{display: "grid", placeItems: "center",}}>
            <div id="contact" className="container" style={{width: "300px",background: "rgba(0,0,0,0)", padding:"15px", margin: "50px 0px 0px 0px"}}>
                    <h3>Nuevo expediente</h3>
                    <fieldset>
                        <select id="dpi_paciente" className="cadaDetalle" >
                            <>
                            <option className="enfermedad" value="" >DPI del paciente: </option>
                            </>
                        </select>
                    </fieldset>
                    <fieldset>
                        <input id="fecha" className="cadaDetalle" type="date" />
                    </fieldset>
                    <fieldset>
                        <select id = "input-state-hereditary-diseases-id" className="cadaDetalle"  >
                            <>
                            <option className="enfermedad" value="" >Enfermedad que posee: </option>
                            </>
                        </select>
                    </fieldset>
                    <fieldset>
                        <select id = "input-state-exam-id" className="cadaDetalle" >
                            <>
                            <option className="enfermedad" value="" >Examen realizado: </option>
                            </>
                        </select>
                    </fieldset>
                    <fieldset>
                        <select id = "input-state-pais" name="state" className="form-control selectpicker" >
                        </select>
                    </fieldset>
                    <fieldset>
                        <select id = "doctores" name="doct" className="cadaDetalle">
                        </select>
                    </fieldset>
                    <fieldset>
                        <input id="statusDelPaciente" className="cadaDetalle" placeholder="Status del paciente" type="text"/>
                    </fieldset>
                    <fieldset>
                        <input id="hora" className="cadaDetalle" type="time" />
                    </fieldset>
                    <fieldset>
                        <select
                            id="input-state-medication"
                            name="state"
                            className="form-control selectpicker"
                            required

                        >
                        </select>
                    </fieldset>
                <button className="enviar" >Enviar</button>
                <div id="status" className="status-message"></div>
            </div>
        </div>
    )
}
export default InsertIncidence