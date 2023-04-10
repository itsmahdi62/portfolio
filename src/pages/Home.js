import image from "../../src/asset/1680812300773.jpg"
import "../App.scss"
import {BsEyeFill, BsCamera , BsLaptop, BsFillCameraVideoFill} from 'react-icons/bs'; 
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
        </div>
        <div className="home-specialization">
                <h2>SPECIALIZATION IN</h2>
                <div className="bottom-line"></div>
                <p>Photography as well as creating digital masterpicese and UI/UX layout for website and mobile aplications</p>
            </div>
        <div className="home-specialization-grid">
            <div>
            <BsCamera size={40} />
                <h3>Photography</h3>
                <p>{" "}I create high-quality images with my professional equipment and edit them with Adobe photoshop. Photography is my best skill.</p>
            </div>

            <div>
            <BsFillCameraVideoFill size={40}/>
                <h3>Video Editing</h3>
                <p>{" "} lorem</p>
            </div>  

            <div>
            <BsLaptop size={40}/>
                <h3>UI / UX</h3>
                <p>{" "}AS UX / UI is my passion I am creating user-frindly masterpiece layouts for website and mobile applications and my clients absolutely love them !</p>
            </div>

            <div>
            <BsEyeFill />
                <h3>Photography</h3>
                <p>{" "}I create high-quality images with my professional equipment and edit them with Adobe photoshop. Photography is my best skill.</p>
            </div>
        </div>
    </div> );
}
export default Home;