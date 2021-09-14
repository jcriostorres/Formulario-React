import React, {useState, Fragment} from 'react';
import { useForm } from 'react-hook-form';
const Formulario = () => {
    
    const {register, errors, handleSubmit} = useForm();
    
    const [entradas, setEntradas] = useState([])

    /*const[usuario, setUsuario] = useState({
        nombre: '',
        edad: '',
        ocupacion: ''
    })
    const handleInputChange = (event) =>{
        setUsuario({
            ...usuario,
            [event.target.name] : event.target.value
        })
    }
    const registrarUsuario = (event) => {
        event.preventDefault()
        console.log(usuario.nombre + '  ' +  usuario.edad + '  ' + usuario.ocupacion);
    }*/

    const onSubmit = (data, e) =>{
        console.log(data);
        setEntradas([
            ...entradas,
            data
        ])
    }



    return ( 
        <Fragment>
            <h1>Registro de Usuarios</h1>
            <form className="row" onSubmit = {handleSubmit(onSubmit)}>
                <div className="col-md-3">
                    <input 
                        type = "text" 
                        placeholder="Ingrese Nombre" 
                        className="form-control"
                        name = "nombre"
                        {...register("nombre",{required: true})}/>
                </div>

                <div className="col-md-3">
                        <input
                            type="number"
                            placeholder="Ingrese Edad"
                            className="form-control"
                            name = "edad"
                            {...register("edad",{required: true, min: 1})}
                        ></input>
                </div>


                <div className="col-md-3">
                    
                <select type = "text" name="ocupacion"  className="form-control" {...register("ocupacion",{required: true})}>
                    <option value="estudiante" selected> Estudiante</option>
                    <option value="empleado">Empleado</option>
                    <option value="jubilado">Jubilado</option>
                </select>
                </div> 

                <div className = "col-md-3">
                    <button className="btn btn-primary" type="submit">guardar</button>
                </div>
            </form>
            <ul>
                {
                    entradas.map(item => 
                        <li>Nombre: {item.nombre} - Edad: {item.edad} - Ocupacion: {item.ocupacion}.</li>    
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default Formulario ;

