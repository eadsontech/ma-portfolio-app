import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='mx-auto max-width-7xl px-8 grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} alt="about me" className="w-full h-64" />
            <article>
                <SectionTitle text='code and coffee' />
                <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab accusamus quos quis architecto, doloribus est. Necessitatibus doloribus sunt illo porro totam obcaecati eos quibusdam quia, assumenda culpa doloremque harum perferendis ullam vero ut nemo tenetur sapiente corporis et reprehenderit?</p>
            </article>
        </div>
    </section>
  )
}
export default About