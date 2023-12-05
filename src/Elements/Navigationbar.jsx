import '../cssFiles/navBarStyles.css'
import {useEffect} from "react";
const NavBar = () =>{
    useEffect(() => {
        const scrollToElement = (elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth',block: "center" });
            }
        };

        const handleButtonClick = (elementId) => {
            return () => {
                scrollToElement(elementId);
            };
        };

        document.getElementById('profileButton').addEventListener('click', handleButtonClick('ABOUT'));
        document.getElementById('experienceButton').addEventListener('click', handleButtonClick('EXP'));
        document.getElementById('skillsButton').addEventListener('click', handleButtonClick('SKILL'));

        return () => {

            document.getElementById('profileButton').removeEventListener('click', handleButtonClick('ABOUT'));
            document.getElementById('experienceButton').removeEventListener('click', handleButtonClick('EXP'));
            document.getElementById('skillsButton').removeEventListener('click', handleButtonClick('SKILL'));
        };
    }, []);

    return (
        <nav className={'navBarOne'}>
            <div className={'navBarcontainer'}>
                <button id="profileButton" className={'navButton'}>Profile</button>
                <button id="experienceButton" className={'navButton'}>Experience</button>
                <button id="skillsButton" className={'navButton'}>Skills</button>
            </div>
        </nav>
    );
};

export default NavBar;
