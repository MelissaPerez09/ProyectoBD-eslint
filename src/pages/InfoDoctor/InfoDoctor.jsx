import React from "react"
import "./InfoDoctor.css"

function InfoDoctor() {
    const fullscreen = []
    return (
        <div
            className={
                fullscreen ? "info-doctor-root" : "info-doctor-root-mainpage"
            }
            style={{ display: "grid", placeItems: "center" }}
        >
            <div
                id="contact"
                className="container-info-doctor"
                style={{
                    backgroundColor: !fullscreen && "rgba(0,0,0,0)",
                    padding: "15px",
                    margin: "50px 0px 0px 0px",
                }}
            >
                <h3>Información del Doctor</h3>
                <h4>Porfavor llenar todos los espacios asignados</h4>
                <fieldset style={{ margin: "0px" }}>
                    <input
                        id="input-DPI"
                        placeholder="DPI del Doctor"
                        type="text"
                        tabIndex="first"
                    />
                </fieldset>
                <div id="dpi-status" />
                <fieldset style={{ margin: "10px 0px 10px 0px" }}>
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
                        id="input-state-especialidad"
                        name="state"
                        className="form-control selectpicker"
                    />
                </fieldset>
                <fieldset>
                    <select
                        label="this is"
                        id="input-state-hospital"
                        name="state"
                        className="form-control selectpicker"
                        required
                    />
                </fieldset>
                <fieldset>
                    <input
                        id="input-direccion"
                        placeholder="Dirección"
                        type="text"
                        tabIndex="fourth"
                        required
                    />
                </fieldset>
                <fieldset style={{ margin: "10px 0px 0px 0px" }}>
                    <input
                        id="input-numero-colegiado"
                        placeholder="Numero de colegiado"
                        type="text"
                        tabIndex="fourth"
                        required
                    />
                </fieldset>
                <div id="collegiate-status" />
                <div
                    id="div-sign-in-status"
                    className="div-login-message"
                    style={{ fontSize: "14px", margin: "10px 0px 0px 0px" }}
                />
            </div>
        </div>
    )
}

export default InfoDoctor
