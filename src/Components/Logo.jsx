import LogoK from "../img/k.png"
import LogoHome from "../img/home.png"
import LogoS from "../img/s.png"
import LogoA from "../img/a.png"

function Logo(){
    return(
            <div id="logoKasa">
                <img src={LogoK} alt="k" />
                <img src={LogoHome} alt="Kasa Logo" />
                <img src={LogoS} alt="S" />
                <img src={LogoA} alt="A" />
            </div>
    )
}

export default Logo