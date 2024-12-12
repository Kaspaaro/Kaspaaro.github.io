import '../cssFiles/profilePictureCSS.css'
const ProfilePicture = () =>{
    return(

        <div className={'profilePictureContainer'} id={'PICTURE'}>
            <img
                className={'profilePicture'}
                src={'https://avatars.githubusercontent.com/u/114400605?v=4'}
                alt="Me"/>

            <main className="containerProfilePic">
                <p className={'GlowText'}>Hello i am</p>
                <section className="animation">
                    <div className="first">
                        <div>Kaspar Tullus</div>
                    </div>
                    <div className="second">
                        <div>Software Engineer</div>
                    </div>
                    <div className="third">
                        <div>Full-stack Developer</div>
                    </div>

                </section>
            </main>


        </div>
    );
}
export default ProfilePicture;
