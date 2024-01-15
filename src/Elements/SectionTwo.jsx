import '../cssFiles/sectionOne.css'
import '../cssFiles/sectionTwo.css'
const SectionTwo = () =>{
    return(

        <section>
            <h1 className={'experienceH1'} id={'SKILL'}>Skills
                <div className={'blockOne'}></div>
                <div className={'blockTwo'}></div>
            </h1>
            <section className={'sectionTwoCodeSection'}>
                <ul className={'codeUL'}>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/SmuuSka/simulointiprojekti'} className={'linkToGit'}>
                            <i className={'devicon-java-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Java</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-php-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>PHP</p>
                        </a>
                    </li >
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/SmuuSka/chatti'} className={'linkToGit'}>
                            <i className={'devicon-javascript-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Javascript</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-lua-plain-wordmark'} id={'codeLogoLua'}></i>
                            <p className={'codeNameText'}>LUA</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-python-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Python</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-typescript-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>TypeScript</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-docker-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Docker</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-jenkins-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Jenkins</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-react-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>React</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-css3-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Css3</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-html5-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Html5</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-rust-plain bg-white'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Rust</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-mysql-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>MySQL</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-bootstrap-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>Bootstrap</p>
                        </a>
                    </li>
                    <li className={'sectionTwoListitem'}>
                        <a href={'https://github.com/Kaspaaro'} className={'linkToGit'}>
                            <i className={'devicon-wordpress-plain colored'} id={'codeLogo'}></i>
                            <p className={'codeNameText'}>WordPress</p>
                        </a>
                    </li>
                </ul>
            </section>
        </section>

    );
}
export default SectionTwo;
