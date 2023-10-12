import {Cartwidget} from "../CartWidget/CartWidget"

function NavBar(){
    return(
      <>
      <nav>
        
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">TIENDA CERAMICA</a></li>
          <li><a href="">TIENDA MOSAIQUISMO</a></li>
          <li><a href="">CONTACTO</a></li>
        </ul>
      </nav>
      <Cartwidget/>
      </>
    )

    
  }

  export default NavBar