import "./InfoPatient.css"
import React from "react"

function InfoPatient() {
    const fullscreen = []
    return (
        <div
            className={
                fullscreen ? "info-patient-root" : "info-patient-mainpage"
            }
        >
            <div
                id="contact"
                className="container-info-patient"
                style={{
                    backgroundColor: !fullscreen && "rgba(0,0,0,0)",
                    padding: "15px",
                    margin: "50px 0px 0px 0px",
                }}
            >
                <h3>Información del Paciente</h3>
                <h4>Porfavor llenar todos los espacios asignados</h4>
                <fieldset>
                    <input
                        id="input-DPI"
                        placeholder="DPI del Paciente"
                        type="text"
                        tabIndex="first"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="input-nombres"
                        placeholder="Nombres"
                        type="text"
                        tabIndex="second"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="input-apellidos"
                        placeholder="Apellidos"
                        type="text"
                        tabIndex="second"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="input-Num"
                        placeholder="Numero de teléfono"
                        type="tel"
                        tabIndex="third"
                        required
                    />
                </fieldset>
                <fieldset>
                    <select
                        label="this is"
                        id="input-state-pais"
                        name="state"
                        className="form-control selectpicker"
                        required
                    />
                </fieldset>
                <fieldset>
                    <select
                        id="input-state-hereditary-diseases"
                        className="enfermedad"
                    >
                        <option className="enfermedad" value="">
                            Posee enfermedades hereditarias?
                        </option>
                        <option value="true"> Sí</option>
                    </select>
                </fieldset>
                <fieldset>
                    <input
                        id="input-body-mass-index"
                        placeholder="índice de masa corporal"
                        type="text"
                        tabIndex="fourth"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="input-height"
                        placeholder="Altura en cm"
                        type="text"
                        tabIndex="fourth"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="input-weight"
                        placeholder="Peso en libras"
                        type="text"
                        tabIndex="fourth"
                        required
                    />
                </fieldset>
                <fieldset>
                    <select id="input-addictions" className="enfermedad">
                        <option className="enfermedad" value=" ">
                            Posee adiccion?
                        </option>
                        <option value="si"> Sí</option>
                        <option value="no"> No</option>
                    </select>
                </fieldset>
                <button type="submit" id="contact-submit">
                    Submit
                </button>
                <div id="div-sign-in-status" className="div-login-message" />
            </div>
        </div>
    )
}

export default InfoPatient
