import './Otros.css'

function Otros(){
    return(
        <div className="otros-root" style={{width: "100%", height: "100%"}} >
            <div className='otros' style={{width: "300px"}}>
                <h1>Otra información interesante</h1>
                <hr></hr>
                <h2>Top 10 de las enfermedades más mortales</h2>
                <div className="detalles" >
                </div>

                <hr></hr>
                <h2>Top 10 de los médicos que más pacientes han atendido</h2>
                    <div className="detalles">
                </div>

                <hr></hr>
                <h2>Top 5 de los pacientes con más asistencias</h2>
                <div className="detalles">
                    <p> Nombre Completo | height | weight| body-mass </p>
                </div>

                <hr></hr>
                <h2>Medicinas o suministros prontos a terminar</h2>
                <div className="detalles" >
                </div>

                <hr></hr>
                <h2>Top 3 de las unidades de salud que más pacientes atienden</h2>
                <div className="detalles">
                </div>
            </div>
        </div>
    )

}
export default Otros