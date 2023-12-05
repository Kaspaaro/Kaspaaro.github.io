import '../cssFiles/sectionOne.css'
import ExperienceTimeline from "./Timeline";
const SectionOne = () =>{
    return(

        <section>
            <h1 className={'experienceH1'} id={'EXP'}>Experience
                <div className={'blockOne'}></div>
                <div className={'blockTwo'}></div>
            </h1>
                <ExperienceTimeline/>
        </section>

    );
}
export default SectionOne;
