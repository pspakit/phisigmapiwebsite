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
    const [uid, setUID] = useState('');

    const nav = useNavigate();

    const loginAction = (e) => {
        e.preventDefault();
        const authen = getAuth();
        signInWithEmailAndPassword(authen, email, password)
        .then((response) => {
            setUID(response.user.uid);
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
                        <img src="pictures/PSP_Shield_4c.png"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a className="active" href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>
                <a onClick={openPop}>Siblings</a>

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
                        <img src="pictures/beta_omicron.jpg" alt="Beta Omicron Sign"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/recruitment_schedule.jpg" alt="Fall 2022 Recruitment Schedule"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/4_girls_with_sign.jpg" alt="PSPAK Sign"></img>
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
                        <p>Connect with us on social media (<a href="https://www.instagram.com/phisigmapiunc/">@phisigmapiunc</a>)</p>
                        </div>
                    </div>
                    <div className="time-container right">
                        <div className="content">
                        <p>RSVP for recruitment events through this interest form (hyperlink)</p>
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
                        <p>Submit your <a href="#fact-sheet">fact sheet application</a> to the recruitment advisors before the end of recruitment</p>
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
                    <p>Must be available for initiate chapter meetings on Wednesdays from 6:00 - 7:30 PM</p>
                    <p>Must fulfill the recruitment attendance requirements (be present at 1 weekday event and the Friday event each week) in addition to completing the fact sheet application and submitting it on time to the recruitment advisors</p>
                </section>

                <section className="special-container">
                    <h4 className="has-text-centered">What are we looking for in our new members?</h4>
                </section>

                <section className="another-container has-text-centered">
                    <p>We want to extend our community and friendship to Carolina undergraduates looking to find their niche on campus</p>
                    <p>Here are some of the things we would love to see in our new members...</p>
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
                    <p>For sake of transparency, the total cost of initiate finances is $270, which can be paid in full at the first initiate chapter meeting or in installments over the initiate period</p>
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
                <section id="fact-sheet" className="recruitment-schedule-container">
                    <h4 className="has-text-centered">[  FALL 2022 RECRUITMENT FACT SHEET  ]</h4>
                </section>

                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" target="_blank" className="fa fa-instagram"></a>
                    <a></a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2022</h1>
                    <a></a>
                    <a href="#top" className="fa fa-arrow-up"></a>
                </section>
            </div>
        </div>
    )

}