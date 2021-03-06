import React, {useState, Fragment} from 'react';
import { useForm } from 'react-hook-form';

const Formulario = () => {
    
    const {register, formState: {errors }, handleSubmit} = useForm();
    
    const [entradas, setEntradas] = useState([])

    const onSubmit = (data, e) =>{
        setEntradas([
            ...entradas,
            data
        ])
        e.target.reset();
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
                        {...register("nombre", {required: true})}/>
                        {errors.nombre && <span>Este campo es requerido</span>}
                </div>

                <div className="col-md-3">
                        <input
                            type="number"
                            placeholder="Ingrese Edad"
                            className="form-control"
                            name = "edad"
                            {...register("edad",{required: true, min: 1})}
                        ></input>
                        {errors.edad && <span>Este campo requiere un valor mayor que 0</span>}

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
            
            <ul className = "list-group">
                {
                    entradas.map(item => 
                        <li className="list-group-item">Nombre: {item.nombre} - Edad: {item.edad} - Ocupacion: {item.ocupacion}.</li>    
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default Formulario ;

