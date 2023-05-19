import ProjectCard from '../ProjectCard/ProjectCard';
import '../ProjectSection/ProjectSection.css'
function ProjectSection() {
    const CardsInfo = 
    [{Iamge:"url(https://stefantopalovicdev.vercel.app/static/media/car-rental-full.c58b37da333d73238fdd.webp)",Title:"car rental",Description:"Renting made easy. Find, compare, and reserve cars for personal or business use on our user-friendly website. Choose from a diverse selection of vehicles. Effortlessly secure your reservation with a few clicks. Experience convenience and flexibility with our streamlined process",Technologies:["React","CSS","bootstrap"],GithubLink:"",LiveDemoLink:""},
    {Iamge:"url(https://stefantopalovicdev.vercel.app/static/media/gymate-home.52d00d03c15713c601c4.webp)",Title:"Gym Personal Trainer",Description:"A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",Technologies:["React","SaSS"],GithubLink:"",LiveDemoLink:""},
    {Iamge:"url(https://stefantopalovicdev.vercel.app/static/media/ecom.f10b3cdd799be85c19da.webp)",Title:"E-commerce",Description:"With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",Technologies:["React","CSS"],GithubLink:"",LiveDemoLink:""}]
    return (
      <div className="project-section">
            <div className='content mb-5'>
                <h4 style={{color: '#023e8a', fontWeight: '800', fontFamily: 'Poppins,sans-serif'}}>Projects</h4>
                <h3 style={{fontSize: '1.2rem',fontWeight: '700',fontFamily: 'Poppins,sans-serif'}}>Each project is a unique piece of development 👀</h3>
            </div>
            <div>
                {CardsInfo.map((project,index)=>{
                  return(
                    <div className="mb-3">
                      <ProjectCard image={project.Iamge} title={project.Title} description={project.Description} technologies={project.Technologies} githubLink={project.GithubLink} liveDemoLink={project.LiveDemoLink} key={index}/>
                    </div>
                  )
                })}
            </div>
      </div>
    );
  }

export default ProjectSection;