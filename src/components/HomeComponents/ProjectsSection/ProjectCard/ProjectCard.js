import '../ProjectCard/ProjectCard.css'

function ProjectCard() {
    return (
      <div className="project-card ">
        <div className='row'>
            <div style={{position:"relative"}} className='col-md-6 image'>
                <div style={{backgroundImage: "url(https://stefantopalovicdev.vercel.app/static/media/car-rental-full.c58b37da333d73238fdd.webp)"}} className='box'>
                    
                </div>
            </div>
            <div className=' content col-md-6'>
                <h4 className='project-name'>Car Rental</h4>
                <p className='project-description'>Renting made easy. Find, compare, and reserve cars for personal or business use on our user-friendly website. Choose from a diverse selection of vehicles. Effortlessly secure your reservation with a few clicks. Experience convenience and flexibility with our streamlined process</p>
                
                <div className='d-flex justify-content-around align-items-center mb-5'>
                  <li style={{color: 'white', width: '3rem'}}>
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" alt="React"/>
                  </li>
                  <li style={{color: 'white', width: '3rem'}}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" title="CSS3" alt="CSS3"/>
                  </li>
                  <li style={{color: 'white', width: '3rem'}}>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" title="Bootstrap" alt="Bootstrap"/>
                  </li>
                </div>
                
                <div className='d-flex justify-content-around align-items-center '>
                    <a className='github-button' target="_blank" href="https://github.com/MoNader99" rel="noreferrer">
                       <i class="fa-brands fa-github"></i> Code
                    </a>
                    <a className='github-button' target="_blank" href="https://github.com/MoNader99" rel="noreferrer">
                      <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i> Live Demo
                      </a>
                </div>

            </div>
        </div>
      </div>
    );
  }

export default ProjectCard;