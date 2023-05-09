import { postData,putData,opc } from '../../Api/customer-api.js';
export class CustomerForm extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.saveData();
    }
    render(){
        this.innerHTML = /*html*/`
        <div class="card">
            <h5 class="card-header">Registro de clientes</h5>
                <div class="card-body">
                <div class="container">
                    <div id="reg" style="display: display;">
                        <div class="card-body">
                        <div class="container">
                            <div class="row g-3">
                            <div class="col-12">
                                <form id = "frmData">
                                <div class="row g-3">
                                    <div class="col-4">
                                    <label for="id" class="form-label">Id</label>
                                    <input type="text" class="form-control" id="id" name="id">
                                </div>
                                    <div class="col-4">
                                        <label for="nombres" class="form-label">Nombre del Camper</label>
                                        <input type="text" class="form-control" id="nombres" name="nombres">
                                    </div>
                                    <div class="col-4">
                                        <label for="edad" class="form-label">Edad</label>
                                        <input type="number" class="form-control" id="edad" name="edad" min="0">                  
                                    </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col-4">
                                        <label for="nroMovil" class="form-label">Nro Movil</label>
                                        <input type="text" class="form-control" id="nroMovil" name="nroMovil">                  
                                    </div>
                                    <div class="col-4">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" name="email">
                                    </div>
                                    <div class="col-4">
                                    <label for="direccion" class="form-label">Direccion</label>
                                    <input type="text" class="form-control" id="direccion" name="direccion">
                                    </div>
                                    <div class="col-4">
                                    <label for="fechaNacimiento" class="form-label">Fecha de Nacimiento</label>
                                    <input type="date" class="form-control" id="fechaNacimiento" name="fechaNacimiento">                  
                                    </div>
                                    <div class="col-4">
                                    <label for="fechaIngreso" class="form-label">Fecha de ingreso al programa</label>
                                    <input type="date" class="form-control" id="fechaIngreso" name="fechaIngreso">                  
                                    </div>
                                    <div class="col-4">
                                    <label for="numeroIdentificacion" class="form-label">Numero Identificacion</label>
                                    <input type="text" class="form-control" id="numeroIdentificacion" name="numeroIdentificacion">                  
                                    </div>
                                    <div class="col-4">
                                    <label for="team" class="form-label">Nombre del Team</label>
                                    <input type="text" class="form-control" id="team" name="team">                  
                                    </div>
                                    </div>
                                    <div class="container mt-4 text-center" >
                                        <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar Camper">
                                    </div>
                                </div>
                                </form>    
                            </div>
                        </div>
                        </div>
                </div>
                </div>
        </div>

        `
        
    }
    saveData = () =>{
        let myForm = document.querySelector("#frmData");
        myForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)    
        })
    }

}
customElements.define("customer-form",CustomerForm);

