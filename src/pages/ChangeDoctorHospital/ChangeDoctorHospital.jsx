import React from "react"
import "./ChangeDoctorHospital.css"

function ChangeDoctorHospital() {
    return (
        <div
            className="change-doctor-hospital-mainpage"
            style={{ display: "grid", placeItems: "center" }}
        >
            <div
                id="contact"
                className="container"
                style={{
                    width: "300px",
                    background: "rgba(0,0,0,0)",
                    padding: "15px",
                    margin: "50px 0px 0px 0px",
                }}
            >
                <h3>Cambiar a Doctor de hospital</h3>
                <h4
                    style={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "21px",
                        padding: "0px",
                        margin: "0px",
                    }}
                >
                    Información del doctor:
                </h4>
                <p style={{ display: "flex", justifyContent: "left" }}>DPI:</p>
                <fieldset style={{ margin: "0px" }}>
                    <select id="dpi_paciente" className="cadaDetalle">
                        <option className="enfermedad" value="">
                            DPI del doctor:
                        </option>
                    </select>
                </fieldset>
                <h4
                    style={{
                        display: "flex",
                        justifyContent: "left",
                        fontSize: "21px",
                        padding: "0px",
                        margin: "20px 0px 0px 0px",
                    }}
                >
                    Asignar nuevo hospital:
                </h4>
                <p style={{ display: "flex", justifyContent: "left" }}>
                    Hospital:
                </p>
                <fieldset style={{ margin: "0px 0px 0px 0px" }}>
                    <select
                        label="this is"
                        id="input-state-pais"
                        name="state"
                        className="form-control selectpicker"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="statusDelPaciente"
                        className="cadaDetalle"
                        placeholder="Comentario"
                        type="text"
                    />
                </fieldset>
                <button className="enviar" type="button">
                    Asignar
                </button>
                <div id="status" style={{ fontSize: "15px" }} />
            </div>
        </div>
    )
}

export default ChangeDoctorHospital
