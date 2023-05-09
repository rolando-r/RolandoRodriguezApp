export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/`
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img class="logo" src="images/logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="campers.html">Campers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="listas.html">Listas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <main>
      <div class="container mt-2">
            <h3 style="color: aliceblue;">Gestor de Campers</h3>
      </div>
        `
    }
}
customElements.define("main-menu",MainMenu);