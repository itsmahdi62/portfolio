import image from "../../src/asset/1680812300773.jpg"
import "../App.scss"
const Home = () => {
    return ( <div className="home">
        <div className="home-intro">
            <div className="home-intro-heading">
                <h1>Hi , I am Mahdi</h1>
                <h1>React.js Developer</h1>
                <button>Veiw my work</button>
            </div>
            <div className="home-intro-image">
                <img src={image} alt="#" className="my-img"/>
            </div>
            <div className="home-specialization"></div>
        </div>
    </div> );
}
export default Home;