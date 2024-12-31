import { skills } from "../data"
import SectionTitle from "./SectionTitle"
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="py-20 mx-auto max-width-7xl px-8" id="skills">
        <SectionTitle text='tech stack' />
        <div className="grid py-16 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
                return <SkillsCard key={skill.id} {...skill} />;
            })}
        </div>
    </section>
  )
}
export default Skills