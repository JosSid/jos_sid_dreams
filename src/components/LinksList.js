import { Link } from "react-router-dom";

const LinksList = () => {
    return (
        <div className="row align-items-center text-center bg-black">
            <Link to={'https://www.linkedin.com/in/josep-valls-valls-jossid/'} target="_blank" style={{textDecoration: 'none'}}><h3><i className="bi bi-linkedin"></i></h3>My linkedin</Link>
            <Link to={'https://github.com/JosSid'} target="_blank" style={{textDecoration: 'none'}}><h3><i className="bi bi-github"></i></h3>My Github</Link>
            <Link to={'http://54.84.80.202/'} target="_blank" style={{textDecoration: 'none'}}><h3><i className="bi bi-globe"></i></h3>Handwebber Project</Link>
            <Link to={'./curriculum_vitae.pdf'} target="_blank" download={true} style={{textDecoration: 'none'}}><h3><i className="bi bi-file-earmark-person-fill"></i></h3>Download my CV</Link>
        </div>
    )   
};

export default LinksList;