import ExploreIntro from "../components/ExploreIntro"
import Navbar from "../components/Navbar"

const Home = ()=> {

    return(
        <>
            <Navbar isLogged={false} colour={"pink"}/>
            <div className="tablet:mt-20 desktop:mt-20">
            <ExploreIntro />
            </div>
        </>
    )
}

export default Home