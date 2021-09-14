import React, {useState, Fragment} from 'react';

const Formulario = () => {

    
    const [usuario, setUsuario] = useState({
        nombre:'',
        edad:'',
        ocupacion: ''
    })

    return ( 
        <Fragment>
            <h1>Registro de Usuarios</h1>
            <form className="row">
                <div className="col-md-3">
                    <input  
                    placeholder="Ingrese Nombre" 
                    className="form-control"
                    type="text"
                    ></input>
                </div>

            <div className="col-md-3">
                    <input
                    placeholder="Ingrese Edad"
                    className="form-control"
                    type="text"
                    ></input>
            </div>


            <div className="col-md-3">
                
            <select name="ocupacion"  className="form-control">
                <option value="empleado" selected>Seleccione ocupacion...</option>
                <option value="estudiante"> Estudiante</option>
                <option value="empleado">Empleado</option>
                <option value="jubilado">Jubilado</option>
            </select>
            </div> 

            <button className="btn btn-primary" type="submit">guardar</button>
            
            </form>

        </Fragment>
     );
}
 
export default Formulario ;

