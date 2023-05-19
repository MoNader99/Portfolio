import '../ProjectCard/ProjectCard.css'
import { useState,useEffect,useMemo} from 'react';
const ProjectCard = (props) => {

  const data = useMemo(() =>  [
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      name: "React"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      name: "Redux"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
      name: ".NET"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      name: "Node.js"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      name: "MongoDB"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      name: "MySQL"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      name: "PostgreSQL"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      name: "TypeScript"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      name: "JavaScript"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      name: "Sass"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      name: "Bootstrap"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      name: "HTML5"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      name: "CSS3"
    },
    {
      image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      name: "Flutter"
    },
    {
      image: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
      name: "Dart"
    },
    {
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      name: "Figma"
    },
    {
      image: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      name: "Flask"
    },
    {
      image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      name: "Git"
    },
    {
      image: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      name: "TensorFlow"
    },
    {
      image: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      name: "Seaborn"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      name: "scikit-learn"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      name: "C++"
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/django.svg",
      name: "Django"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
      name: "MATLAB"
    },
    {
      image: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
      name: "OpenCV"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
      name: "pandas"
    },
    {
      image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      name: "Postman"
    },
    {
      image: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
      name: "PyTorch"
    },
    {
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      name: "Python"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
      name: "Qt"
    }
  ], []);

  const [Image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Technologies, setTechnologies] = useState([]);
  const [GithubLink, setGithubLink] = useState("");
  const [LiveDemoLink, setLiveDemoLink] = useState("");

  useEffect(() => {
    setImage(props.image)
    setTitle(props.title)
    setDescription(props.description)
    setGithubLink(props.githubLink)
    setLiveDemoLink(props.liveDemoLink)
    const images = [];
    for (const item of data) {
      const { image, name } = item;
      // Check if any of the search strings match the name
      const matches = props.technologies.some((searchString) =>
        name.toLowerCase().includes(searchString.toLowerCase())
      );
      // If there is a match, add the image to the results array
      if (matches) {
        images.push(image);
      }
    }
    setTechnologies(images)
  },[data,props]);

    return (
      <div className="project-card ">
        <div className='row'>
            <div style={{position:"relative"}} className='col-md-6 image'>
                <div style={{backgroundImage: Image }} className='box'>
                    
                </div>
            </div>
            <div className=' content col-md-6'>
                <h4 className='project-name'>{Title}</h4>
                <p className='project-description'>{Description}</p>
                
                <div className='d-flex justify-content-around align-items-center mb-5'>
                  {
                    Technologies.map((tech,index)=>{
                      return(
                      <li style={{color: 'white', width: '3rem'}}>
                          <img src={tech} alt="technology"/>
                      </li>
                      )   
                    })
                  }
                  
                </div>
                
                <div className='d-flex justify-content-around align-items-center '>
                    <a className='github-button' target="_blank" href={GithubLink} rel="noreferrer">
                       <i class="fa-brands fa-github"></i> Code
                    </a>
                    <a className='github-button' target="_blank" href={LiveDemoLink} rel="noreferrer">
                      <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i> Live Demo
                      </a>
                </div>

            </div>
        </div>
      </div>
    );
  }

export default ProjectCard;