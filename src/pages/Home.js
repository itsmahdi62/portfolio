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
            <div className="home-specialization">
                <h2>SPECIALIZATION IN</h2>
                <div className="bottom-line"></div>
                <p>Photography as well as creating digital masterpicese and UI/UX layout for website and mobile aplications</p>
            </div>
        </div>

        <div className="home-specialization-grid">
            <div>
                <h3>Photography</h3>
                <p>{" "}I create high-quality images with my professional equipment and edit them with Adobe photoshop. Photography is my best skill.</p>
            </div>

            <div>
                <h3>Video Editing</h3>
                <p>{" "} lorem</p>
            </div>  

            <div>
                <h3>Photography</h3>
                <p>{" "}I create high-quality images with my professional equipment and edit them with Adobe photoshop. Photography is my best skill.</p>
            </div>

            <div>
                <h3>Photography</h3>
                <p>{" "}I create high-quality images with my professional equipment and edit them with Adobe photoshop. Photography is my best skill.</p>
            </div>
        </div>
    </div> );
}
export default Home;