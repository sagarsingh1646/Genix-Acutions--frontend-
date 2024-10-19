import ExploreIntro from "../components/ExploreIntro"
import Navbar from "../components/Navbar"

const Home = ()=> {

    return(
        <>
            <Navbar isLogged={false} colour={"pink"}/>
            <ExploreIntro/>
        </>
    )
}

export default Home