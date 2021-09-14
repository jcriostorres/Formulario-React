import React, {useState, Fragment} from 'react';

const Formulario = () => {

    
    const[usuario, setUsuario] = useState({
        nombre: '',
        edad: ''
    })

    const handleInputChange = (event) =>{
        setUsuario({
            ...usuario,
            [event.target.name] : event.target.value
        })
    }



    return ( 
        <Fragment>
            <h1>Registro de Usuarios</h1>
            <form className="row">
                <div className="col-md-3">
                    <input 
                        type = "text" 
                        placeholder="Ingrese Nombre" 
                        className="form-control"
                        name = "nombre"
                        onChange = {handleInputChange}
                    ></input>
                </div>

            <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Ingrese Edad"
                        className="form-control"
                        name = "edad"
                        onChange = {handleInputChange}

                    ></input>
            </div>


            <div className="col-md-3">
                
            <select type = "text" name="ocupacion"  className="form-control" onChange = {handleInputChange}>
                <option value="empleado" selected>Seleccione ocupacion...</option>
                <option value="estudiante"> Estudiante</option>
                <option value="empleado">Empleado</option>
                <option value="jubilado">Jubilado</option>
            </select>
            </div> 

            <div className = "col-md-3">
                <button className="btn btn-primary" type="submit">guardar</button>
            </div>
            </form>
            <h3>{usuario.nombre} - {usuario.edad} - {usuario.ocupacion}</h3>
        </Fragment>
     );
}
 
export default Formulario ;

