import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Firebase Stuff
import { 
  getAuth, 
  signInWithEmailAndPassword } from 'firebase/auth'

export default function About() {

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
                <a className="active" href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
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
                    <h1 className="has-text-centered">Our Chapter</h1>
                </section>

                <section className="special-container has-text-centered">
                    <h4>Mission</h4>
                </section>

                <section className="container">
                    <p className="has-text-centered">Phi Sigma Pi National Honor Fraternity is an inclusive organization dedicated to: promoting lifelong learning, inspiring Members to lead, and cultivating lasting fraternal bonds, while always conducting our lives with honor. We commit ourselves to a life of social service with the goal of improving humanity through our principles: Scholarship, Leadership, and Fellowship.</p>
                </section>

                <div className="mission-row">
                    <div className="mission-col">
                        <img src="pictures/soccer.jpg" alt="Intramural Soccer Team"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/shirts.jpg" alt="Phi Sig Shirts"></img>
                    </div>
                    <div className="mission-col">
                        <img src="pictures/arboretum.jpg" alt="Arboretum"></img>
                    </div>
                </div>
                
                <section className="special-container has-text-centered">
                    <h4>Tripod</h4>
                </section>

                <section className="special-qualification-container">
                    <p className="has-text-centered">Scholarship</p>
                </section>

                <section className="container">
                    <p className="has-text-centered">As an honor organization, we expect our members to maintain good academic standing. Academic standing, however, is just a small part of the scholarship ideal. Scholarship in our organization expands outside the classroom and is a part of a larger “always learning” philosophy. Our chapters coordinate scholarship events such as painting nights, TED Talks and mental health awareness panels.</p>
                </section>

                <section className="no-top-special-qualification-container">
                    <p className="has-text-centered">Leadership</p>
                </section>

                <section className="container">
                    <p className="has-text-centered">Phi Sigma Pi provides the opportunity for students to gain core leadership skills to strengthen oneself; but then, just as importantly, how they apply that skill to pay it forward. Our nationally award-winning Leadership in Action is a personal/professional leadership training and certification program that provides members with the skills to inspire a positive change. This certification program goes beyond the traditional organization leadership roles by exploring communication skills for emerging leaders and team management. Leadership in Phi Sigma Pi also extends through service in our communities. Our chapters support our National Philanthropy and also plan philanthropic events with their local organizations that have a meaningful impact to the local community.</p>
                </section>

                <section className="no-top-special-qualification-container">
                    <p className="has-text-centered">Fellowship</p>
                </section>

                <section className="container">
                    <p className="has-text-centered">Phi Sigma Pi develops a culture of fellowship within the organization. In addition to a culture that develops friendships, it also fosters a sense of teamwork and camaraderie that allows for the local chapter to plan successful events and activities. In Phi Sigma Pi, you’re a member for life. Fellowship provides the passion and stability to fully remain involved with Phi Sigma Pi.</p>
                </section>

                <section className="email-container">
                    <h4 className="has-text-centered">For more information, visit:</h4>
                    <h4 className="has-text-centered"><a href="https://phisigmapi.org/" target="_blank" rel="noreferrer">https://phisigmapi.org/</a></h4>
                </section>

                <section className="special-container">
                    <h1 className="has-text-centered">Leadership</h1>
                </section>
                                   // ADD THE NEW CHAIRS hiii
                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Anna_Coley.png" alt="President"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Josh_Shooman.png" alt="Vice President"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Payton_Emerick.png" alt="Parliamentarian"></img>
                    </div>
                </div>

                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Ray_Adjah.png" alt="Recording Secretary"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Hannah_Vernile.png" alt="Initiate Advisor"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Ellie_Duwel.png" alt="Initiate Advisor"></img>
                    </div>
                </div>

                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Skylar_Lewis_Exec.png" alt="Treasurer"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Ava_Reeder.png" alt="Treasurer"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Olivia_Shelton_Exec.png" alt="Historian"></img>
                    </div>
                </div>

                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Riley_Richardson_Exec.png" alt="Corresponding Secretary"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Angel_Chen.png" alt="New Class Represontative•"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Daisy_Huang.png" alt="Scholarship"></img>
                    </div>
                </div>

                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Gracie_Egerton.png" alt="Fellowship/IM"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Emmy_Miller.png" alt="Fellowship/IM"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Riley_Richardson_Chair.png" alt="Service"></img>
                    </div>
                </div> 
 
                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Drew_Adams.png" alt="Recruitment"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Hunter_Bennett.png" alt="Recruitment"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Dazey_Dolicker.png" alt="Intentional Programming"></img>
                    </div>
                </div>

                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Olivia_Shelton_Chair.png" alt="Fundraising"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Skylar_Lewis_Chair.png" alt="Fundraising"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Raquel_Winker.png" alt="Public Relations/Alumni"></img>
                    </div>
                </div>

                <div className="mission-row1">
                    <div className="mission-col1">
                        <img src="pictures/Gina_Jang.png" alt="IT"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Mckenna_Sutherland.png" alt="Inter-Chapter Relations"></img>
                    </div>
                    <div className="mission-col1">
                        <img src="pictures/Sydney_Jones.jpg" alt="Standards"></img>
                    </div>
                </div> 

                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" target="_blank" rel="noreferrer"z className="fa fa-instagram"> </a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2023</h1>
                    <a href="#top" className="fa fa-arrow-up"> </a>
                </section>
            </div>
        </div>
    )

}
