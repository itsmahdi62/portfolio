import image from "../../src/asset/1680812300773.jpg"
import "../App.scss"
import {BsEyeFill, BsCamera , BsLaptop, BsFillCameraVideoFill} from 'react-icons/bs'; 
import { motion } from "framer-motion"

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
                <div className="button-line"></div>
                <p>Photography as well as creating digital masterpicese and UI/UX layout for website and mobile aplications</p>
            </div>
            <div className="home-specialization-grid">
            <motion.button whileHover={{scale: 1.1}}>
                <div>
                <BsCamera size={40} />
                    <h3>Photography</h3>
                    <p>{" "}I create high-quality images with my professional equipment and edit them with Adobe photoshop. Photography is my best skill.</p>
                </div>
            </motion.button>
            <motion.button whileHover={{scale: 1.1}}>
                <div>
                <BsFillCameraVideoFill size={40}/>
                    <h3>Video Editing</h3>
                    <p>{" "} lorem</p>
                </div>  
             </motion.button>

            <motion.button whileHover={{scale: 1.1}}>
                <div>
                    <BsLaptop size={40}/>
                    <h3>UI / UX</h3>
                    <p>{" "}AS UX / UI is my passion I am creating user-frindly masterpiece layouts for website and mobile applications and my clients absolutely love them !</p>
                </div>
            </motion.button>

            <motion.button whileHover={{sclale: 1.1}}>
                <div>
                <BsEyeFill size={40}/>
                    <h3>Photography</h3>
                    <p>{" "}I create high-quality images with my professional equipment and edit them with Adobe photoshop. Photography is my best skill.</p>
                </div>
            </motion.button>
        </div>
    </div> );
}
export default Home;