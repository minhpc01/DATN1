import Slider from "../components/Slider"
import Section1 from "../components/Section1"
import ListProduct from '../components/ListProduct'
import Section3 from "../components/Section3"
// import Chatbot from "../components/Chatbot"

const Home = () => {

    return (
        <div>
            <Slider />
            {/* <a href="http://localhost:3001/sign-in">Link chatbot</a> */}
            <main>
                <Section1 />
                <ListProduct />
                <Section3 />
                {/* <Chatbot/> */}
                
            </main>
        </div>
    )
}

export default Home