import '../cssFiles/sectionOne.css'
import '../cssFiles/sectionThree.css'
const SectionThree = () =>{
    return(

        <section>
            <h1 className={'experienceH1'} id={'ABOUT'}>About Me
                <div className={'blockOne'}></div>
                <div className={'blockTwo'}></div>
            </h1>

            <section className="experienceDivsectionThree">
            <article>
                <p className={'paragraphSectionThree'}>Hello and welcome to my GitHub portfolio. My name is Kaspar, a dedicated developer hailing from Finland, currently pursuing my academic journey at Metropolia UAS.<br/><hr/><br/>
                    I specialize in a diverse range of programming languages, including Java, Lua, HTML, CSS, TypeScript, JavaScript, and SQL.<br/>
                    While there are additional languages in my repertoire, I may not be fully proficient in all of them; nonetheless, I can effectively leverage them to craft exceptional programs.<br/><hr/><br/>
                    In my leisure time, I channel my creativity into game development on the Roblox platform, where I design games and create 3D objects in Blender for my projects.<br/><hr/><br/>
                    These activities not only fuel my imaginative prowess but also deepen my understanding of the Lua programming language.<br/>
                    Beyond coding, I engage in music production using FL Studio, honing my skills in a professional music studio program during my free hours.<hr/>

                </p>
            </article>
            </section>

        </section>

    );
}
export default SectionThree;
