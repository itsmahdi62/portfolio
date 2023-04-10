import todo from "../../asset/20190904_142827_HDR.jpg"
import { motion } from "framer-motion";
import "./Projects.scss"
const Projects = () => {
    const project = [
        {
            id:1,
            name:"Shop",
            img: todo,
            link:"https://github.com/itsmahdi62/shop"
        },
        {
            id:2,
            name:"wether",
            img: todo,
            link:"https://github.com/itsmahdi62/weather"
        }
    ]
    const handelClick = (url) =>{
        window.open(url )
    }
    return ( <div className="projects">
        <div className="projects-heading">
            <h2>MY WORK...</h2>
            <div className="bottom-line"></div>
        </div>
        <div className="projects-flex">
            {project.map((item) =>(        
                    <motion.div whileHover={{scale : 1.08}} 
                    transition={{ ease: "easeOut" , duration : 1}}
                    key={item.id}
                        onClick={() => handelClick(item.link)}>

                        <img src={item.img} alt='#'/>
                    </motion.div>
            ))}
        </div>
        
    </div> );
}
 
export default Projects;