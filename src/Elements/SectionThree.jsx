import '../cssFiles/sectionOne.css'
import '../cssFiles/sectionThree.css'
const SectionThree = () =>{
    return(

        <section>
            <h1 className={'experienceH1'} id={'ABOUT'}>About Me
                <div className={'blockOne'}></div>
                <div className={'blockTwo'}></div>
            </h1>

            <section className='experienceDivsectionThree'>
                <article>
                    <p className='paragraphSectionThree'>Welcome to my portfolio! I am a software engineer with a passion for all types of technology.
                        My goal is to be a jack of all trades, which means I strive to learn as much as possible about various fields of technology.<br/>
                        I am intrested in Full-Stack development, Machine Learning and DevOps. I am currently finishing my bachelor's degree in Computer Science at the University of Metropolia in Helsinki, Finland.<br/>
                        <hr/>
                        Looking for a opportunity to find a job in the field of technology, where i could complete my thesis work for my bachelor's degree and possibly continue working after that.<br/>
                        <hr/>
                        I am a fast learner, I am not afraid to ask questions as its apart of science and technology to ask questions and learn from them. I am a team player and i am always happy to help others.<br/>
                        I work with a positive attitude and i am always ready to learn new things. My hobbies include playing video games, programming games on a free platform called "Roblox" with the programming language LUA and modeling with Blender.<br/>
                        <hr/>
                    </p>
                </article>
                <section>
                    <article>
                        <h1 className={'socialLinksTitle'}>⭐Social Links⭐</h1>
                        <p className='paragraphSectionSocialLinks'>
                            <a className='socialLink' href="https://github.com/Kaspaaro">
                                <i className="devicon-github-original-wordmark"></i>
                            </a>
                            <a className='socialLink' href="https://www.linkedin.com/in/kaspar-tullus-70485723a/">
                                <i className="devicon-linkedin-plain-wordmark"></i>
                            </a>
                        </p>
                    </article>
                </section>
            </section>

        </section>

    );
}
export default SectionThree;
