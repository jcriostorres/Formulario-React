import React, {useState, Fragment} from 'react';

const Formulario = () => {

    
    const [usuario, setUsuario] = useState(1)

    const guardar = () =>{
        console.log("Me presionaste");
    }

    return ( 
        <Fragment class = "formulario">
            <h1>Registro de Usuarios</h1>
            <input type="text" placeholder="Nombre" ></input>
            <input type="text" placeholder="Edad" ></input>
            <select name="ocupacion">
                <option value="estudiante" selected>Estudiante</option>
                <option value="empleado" >Empleado</option>
                <option value="jubilado">Jubilado</option>
                
            </select>
            <input type = "button" value = "Registrar" onclick = "guardar()"></input>



        </Fragment>
     );
}
 
export default Formulario ;

