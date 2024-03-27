import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Firebase Stuff
import { 
  getAuth, 
  signInWithEmailAndPassword } from 'firebase/auth'

export default function Recruitment() {

    const openPop = o => {
        document.getElementById("loginForm").style.display = "block";
    }

    const closePop = c => {
        document.getElementById("loginForm").style.display = "none";
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [uid, setUID] = useState('');

    const nav = useNavigate();

    const loginAction = (e) => {
        e.preventDefault();
        const authen = getAuth();
        signInWithEmailAndPassword(authen, email, password)
        .then((response) => {
            //setUID(response.user.uid);
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            nav('/siblings')
        })
        .catch((error) => {
            console.log(error);
            alert("Bad Info!");
        })
    }

    return (
        <div id="top">
            <div className="topnav">
                <a href="/">
                    <div className="logo-image">
                        <img src="pictures/PSP_Shield_4c.png" alt="PSP Shield"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a className="active" href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>
                <a href="/payment">Payment</a>
                <a href="#top" onClick={openPop}>Siblings</a>

                <div className="form-popup" id="loginForm">
                    <form className="form-container">
                        <h1>Sibling Login</h1>
                        <label name="email">Email</label>
                        <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} name="email" required></input>
                        <label name="password">Password</label>
                        <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} name="password" required></input>
                        <button type="submit" onClick={loginAction} className="btn">Login</button>
                        <button type="button" className="btn cancel" onClick={closePop}>Close</button>
                    </form>
                </div>
                
            </div>
            <div>
                <section className="special-container">
                    <h1 className="has-text-centered">Recruitment Timeline</h1>
                </section>
                <div className="mission-row">
                    <div className="mission-col">
                        <img src="pictures/RachelAnnaJulia.jpg" alt="Rachel Anna Julia Big Little Reveal"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/2023FallPC.jpg" alt="2023 Fall PC"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/emmy_mikayalaBigLittle.jpg" alt="Emmy and Mikayla Big Little Reveal"></img>
                    </div>
                </div>
                <section className="special-container has-text-centered">
                    <h4>How many recruitment events do I need to attend?</h4>
                </section>

                <div className="rectangular-column-container">
                    <div className="rectangular-column">
                        <p>You will have several opportunities over a two-week period to get to know current chapter members</p>
                    </div>
                    <div className="rectangular-column">
                        <p>Potential new members (PNMs) <b>must attend one weekday event and the Friday social event each week</b> to fulfill their attendance requirements</p>
                    </div>
                    <div className="rectangular-column">
                        <p>Flexibility about attendance will be extended if personal circumstances or conflicts arise - just communicate with the recruitment advisors</p>
                    </div>
                </div>

                <section className="special-container has-text-centered">
                    <h4>What does my full recruitment timeline look like?</h4>
                </section>

                <div className="spacing-container">
                    <p>  </p>
                </div>

                <section className="timeline">
                    <div className="time-container left">
                        <div className="content">
                        <p>Connect with us on social media (<a href="https://www.instagram.com/phisigmapiunc/" target="_blank" rel="noreferrer">@phisigmapiunc</a>)</p>
                        </div>
                    </div>
                    <div className="time-container right">
                        <div className="content">
                        <p>RSVP for recruitment events through this <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9AJzHUxm5TS68_eExA4rP6WqyHBZID1-LamKjsSZnssSHEg/viewform?usp=sf_link" target="_blank" rel="noreferrer">interest form</a></p>
                        </div>
                    </div>
                    <div className="time-container left">
                        <div className="content">
                        <p>Visit our table at the pit or come to an information session</p>
                        </div>
                    </div>
                    <div className="time-container right">
                        <div className="content">
                        <p>Fulfill the attendance requirements during recruitment</p>
                        </div>
                    </div>
                    <div className="time-container left">
                        <div className="content">
                        <p>Meet with an assigned rush buddy during the second week of recruitment</p>
                        </div>
                    </div>
                    <div className="time-container right">
                        <div className="content">
                        <p>Submit your <a href="https://docs.google.com/document/d/1YHrglFb6iwFfEx0nkamgC3Z-mB-Gv4-RuXc01gDZI2A/edit?usp=sharing" target="_blank" rel="noreferrer">fact sheet application</a> to the recruitment advisors before the end of recruitment</p>
                        </div>
                    </div>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Membership Requirements</h1>
                </section>

                <div className="mission-row">
                    <div className="mission-col">
                        <img src="pictures/I_went_phi_sig.jpg" alt="I went phi sig!"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/waffle.jpg" alt="Bid Breakfast"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/campus_y.jpg" alt="Beta O's!"></img>
                    </div>
                </div>

                <section className="special-container">
                    <h4 className="has-text-centered">Are you eligible for recruitment?</h4>
                </section>

                <section className="special-qualification-container">
                    <p className="has-text-centered">New membership qualifications include...</p>
                </section>

                <section className="another-container has-text-centered">
                    <p>Must have a 3.0 UNC GPA</p>
                    <p>Must have been a UNC student for at least one semester and have at least 3 semesters left at UNC</p>
                    <p>Must be available for initiate chapter meetings on Tuesdays from 7:00 - 8:00 PM</p>
                    <p>Must fulfill the recruitment attendance requirements (be present at 1 weekday event and the Friday event each week)</p>
                    <p>Must complete the fact sheet application and submit it on time to the recruitment advisors</p>
                </section>

                <section className="special-container">
                    <h4 className="has-text-centered">What are we looking for in our new members?</h4>
                </section>

                <div className="rectangular-column-container">
                    <div className="rectangular-column">
                        <p>Passionate about their field(s) of study and enjoy sharing that knowledge with others</p>
                    </div>
                    <div className="rectangular-column">
                        <p>Have strong leadership and professional skills or are looking to further develop these qualities to become a successful student leader</p>
                    </div>
                    <div className="rectangular-column">
                        <p>Excited and energized to participate fully in and help plan events and programs to benefit the UNC and broader Chapel Hill community through social service</p>
                    </div>
                    <div className="rectangular-column">
                        <p>Looking to build strong connections and relationships with other students through fun and informational social events throughout the year</p>
                    </div>
                </div>

                <div className="mission-row">
                    <div className="mission-col">
                        <img src="pictures/rose.jpg" alt="Will you accept this rose?"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/another_welcome_to_fam.jpg" alt="Welcome to the fam!"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/welcome_to_fam.jpg" alt="Welcome to the fam!"></img>
                    </div>
                </div>

                <section className="special-container">
                    <h4 className="has-text-centered">What happens if you receive a bid and become an initiate?</h4>
                </section>

                <section className="another-container has-text-centered">
                    <p>You will complete a six-week initiate period under the guidance of the initiate advisors</p>
                    <p>The initiate period includes a pinning ceremony, attending weekly meetings on Wednesdays, receiving a big sibling and family, meeting one-on-one with chapter members, going on a bonding retreat, planning chapter events, and more</p>
                    <p>The initiate period will conclude with the ritual in which you will be inducted as a full member if all initiation requirements are met</p>
                </section>

                <section className="special-container">
                    <h4 className="has-text-centered">What about the cost of joining?</h4>
                </section>

                <section className="special-qualification-container">
                    <p className="has-text-centered">Total: $276</p>
                    <p className="has-text-centered">$87 Local Dues  |  $84 National Dues  |  $105 One-Time Initiation Fee</p>
                </section>

                <section className="another-container has-text-centered">
                    <p>For sake of transparency, the total cost of initiate finances is $276, which can be paid in full at the first initiate chapter meeting or in installments over the initiate period</p>
                    <p>Semester membership dues help us maintain our status as a national organization and greatly assist our leadership team with the planning and execution of fun events and rewarding experiences</p>
                    <p>Some dues relief and financial assistance can be offered to initiates each semester</p>
                </section>

                <section className="email-container">
                    <h4 className="has-text-centered">Please direct any questions in the weeks prior or during Recruitment to the Recruitment Advisors at:</h4>
                    <h4 className="has-text-centered"><a href="mailto:pspakrecruitment@gmail.com">pspakrecruitment@gmail.com</a></h4>
                </section>

                <section className="special-container">
                    <h1 className="has-text-centered">Recruitment Materials</h1>
                </section>

                <section className="container">
                    <iframe title="Spring 2024 Recruitment Fact Sheet" src="https://docs.google.com/document/d/1eiCmVNGOxVHB6y841hx8X3HhLFxO7g_aBvub6A8Av_M/edit?embedded=true" scrolling="auto" width="100%" height="700"></iframe>
                </section>

                <section className="email-container">
                    <h4 className="has-text-centered"><a href="https://docs.google.com/document/d/e/2PACX-1vQmDsxMuC_st5ivG1OmzgON1VXKRt-_QGDotPQZIa5OvFDtXY35jUTqhHwHvAjcliDvE8kEhjjLcHpj/pub?embedded=true" target="_blank" rel="noreferrer">Spring Recruitment 2024 - Fact Sheet</a></h4>
                </section>

                <section className="container">
                    <iframe title="Fall 2022 Recruitment Interest Form" src="https://docs.google.com/forms/d/e/1FAIpQLSf9AJzHUxm5TS68_eExA4rP6WqyHBZID1-LamKjsSZnssSHEg/viewform?embedded=true" width="100%" height="700">Loading…</iframe>
                </section>

                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" target="_blank" rel="noreferrer" className="fa fa-instagram"> </a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2024</h1>
                    <a href="#top" className="fa fa-arrow-up"> </a>
                </section>
            </div>
        </div>
    )

}