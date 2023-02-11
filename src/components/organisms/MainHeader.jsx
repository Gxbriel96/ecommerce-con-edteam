import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"
import "../../styles/index.css"
const MainHeader = () =>{
    return (
        <div className="fixed bg-gradient w-full z-10">
            <div className="w-full m-auto flex items-center lg:max-w-256">
                <Logo/>
                <MainMenu/>
            </div>
        </div>
    )
}

export default MainHeader
