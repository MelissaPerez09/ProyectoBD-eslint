import "./Update_Incidence.css"
import React from "react"

function UpdateIncidence() {
    return (
        <div
            className="update-incindence-mainpage-root1"
            style={{ display: "grid", placeItems: "center", margin: "0px" }}
        >
            <div
                id="update-contact"
                className="container"
                style={{
                    background: "rgba(0,0,0,0)",
                    padding: "15px",
                    margin: "50px 0px 0px 0px",
                }}
            >
                <h3>Edición de expediente</h3>

                <fieldset>
                    <select>
                        <option className="file" value="">
                            DPI del paciente:{" "}
                        </option>
                    </select>
                </fieldset>
                <fieldset>
                    <select id="input-state-file-id" className="cadaDetalle">
                        <option className="file" defaultValue="">
                            Archivo que desea editar:{" "}
                        </option>
                    </select>
                </fieldset>
                <button className="buscar" type="button">
                    {" "}
                    Buscar
                </button>
                <fieldset>
                    <input id="fecha" className="cadaDetalle" type="date" />
                </fieldset>
                <fieldset>
                    <select
                        id="input-state-hereditary-diseases-id"
                        className="cadaDetalle"
                    >
                        <option className="enfermedad" value="">
                            Enfermedad que posee:{" "}
                        </option>
                    </select>
                </fieldset>
                <fieldset>
                    <select id="input-state-exam-id" className="cadaDetalle">
                        <option className="enfermedad" value="">
                            Examen realizado:{" "}
                        </option>
                    </select>
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
                        label="this is"
                        id="doctores"
                        name="doct"
                        className="cadaDetalle"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="statusDelPaciente"
                        className="cadaDetalle"
                        placeholder="Status del paciente"
                        type="text"
                    />
                </fieldset>
                <fieldset>
                    <input id="hora" className="cadaDetalle" type="time" />
                </fieldset>
                <fieldset>
                    <select
                        label="this is"
                        id="input-state-medication"
                        name="state"
                        className="form-control selectpicker"
                        required
                    />
                </fieldset>
                <button className="buscar" type="button">
                    {" "}
                    Editar{" "}
                </button>
            </div>
        </div>
    )
}
export default UpdateIncidence
