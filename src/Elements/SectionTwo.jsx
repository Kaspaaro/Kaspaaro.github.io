import '../cssFiles/sectionOne.css'
import '../cssFiles/sectionTwo.css'
import {skills} from "./SkillsData.jsx";
const SectionTwo = () =>{
    return(
        <section>
            <h1 className={'experienceH1'} id={'SKILL'}>Skills
                <div className={'blockOne'}></div>
                <div className={'blockTwo'}></div>
            </h1>
            <section className={'sectionTwoCodeSection'}>
                <ul className={'codeUL'}>
                    {skills.map((skill, index) => (
                        <li key={index} className="sectionTwoListitem">
                            <a href={skill.link} className="linkToGit" target="_blank" rel="noopener noreferrer">
                                <i className={skill.iconClass} id="codeLogo"></i>
                                <p className="codeNameText">{skill.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </section>

    );
}
export default SectionTwo;
