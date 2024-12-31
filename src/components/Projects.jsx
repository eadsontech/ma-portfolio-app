import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className='py-20 mx-auto max-width-7xl px-8' id='projects'>
        <SectionTitle text='web creations' />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => {
                return <ProjectsCard key={project.id} {...project} />
            })}
        </div>
    </section>
  )
}
export default Projects