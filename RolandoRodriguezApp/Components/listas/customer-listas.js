import { getDataAll } from '../../Api/customer-api.js'
export class CustomerListas extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.requestApiGetCamper();
    }
    render(){
        this.innerHTML = /*html*/`
        <div class="container" id="lstCampers">
        <table class="table table-striped">
          <thead style="color: white;">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Direccion</th>
              <th>Fecha nacimiento</th>
              <th>Numero identificacion</th>
              <th>Fecha ingreso</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody id="lista-campers">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button type="button" class="btn btn-success">+</button>
                <button type="button" class="btn btn-danger">-</button>
                </td>
            </tr>
          </tbody>
  
        </table>
      </div>
        `
}
requestApiGetCamper = () =>{
    getDataAll()
        .then((result)=>{
            this.renderCampers(result);
        })
}
renderCampers = (campers)=>{
    let campersHTML = '';
    for(let camper of campers){
        campersHTML += this.crearListaCampersHTML(camper);
    }
    document.getElementById('lista-campers').innerHTML = campersHTML;
    this.callModal();
    this.putData();
}

crearListaCampersHTML = (campers)=>{
    let listaHTML = /* html */ `
    <tr>
        <td>${campers.id}</td>
        <td>${campers.nombres}</td>
        <td>${campers.edad}</td>
        <td>${campers.nroMovil}</td>
        <td>${campers.email}</td>
        <td>${campers.direccion}</td>
        <td>${campers.fechaNacimiento}</td>
        <td>${campers.numeroIdentificacion}</td>
        <td>${campers.fechaIngreso}</td>
        <td>${campers.id_team}</td>
        <td>
                <a class="btn btn-success " data-bs-toggle="modal" data-bs-target="#putCamper" id="putData" data-idcli='${campers.id}'><i class='bx bx-edit-alt icono' data-idcli='${campers.id}'></i></a>
                <a class="btn btn-danger" data-idclidel='${campers.id}'><i class='bx bx-message-alt-x icono'></i></a>
        </td>
        </tr>
    `;
    return listaHTML;
}

callModal = () =>{
        document.querySelectorAll('#putData').forEach((item,id) =>{
            item.addEventListener("click",(e) =>{
                this.idUsr=e.target.dataset.idcli;
                this.requestApiGetClienteById(e.target.dataset.idcli);
                e.stopImmediatePropagation();
                e.preventDefault();
            })
        })

    }
    requestApiGetClienteById = (id) =>{
        searchDataById(id)
            .then((result)=>{
                this.loadDataFrm(result);
            })
    }
    loadDataFrm(data){
        
        const myForm = document.querySelector("#frmData");
        const {id,nombres,edad,nroMovil,email,direccion,fechaNacimiento,fechaIngreso,id_team} = data;
        const frm = new FormData(myForm);
        frm.set("nombres",nombres);
        frm.set("edad",edad);
        frm.set("nroMovil",nroMovil);
        frm.set("email",email);
        frm.set("direccion",direccion);
        frm.set("fechaNacimiento",fechaNacimiento);
        frm.set("numeroIdentificacion",numeroIdentificacion);
        frm.set("fechaIngreso",fechaIngreso);
        frm.set("id_team",id_team);

        for (var pair of frm.entries()) {

            myForm.elements[pair[0]].value = pair[1];
        }

    }
    putData = (id) =>{
        let myForm = document.querySelector("#frmData");
        myForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data,this.idUsr);  
        })
    }

}
customElements.define("customer-listas",CustomerListas);