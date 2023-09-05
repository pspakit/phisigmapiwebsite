//import { useNavigate } from "react-router-dom";

export default function Siblings() {

    //const nav = useNavigate();

    /*const auth1 = sessionStorage.getItem('Auth Token');
    if (auth1 === null) {
        nav('/')
    }*/

    return (
        <div id="top">
            <div className="topnav">
                <a href="/">
                    <div className="logo-image">
                        <img src="pictures/PSP_Shield_4c.png" alt="PSP Shield"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>
                <a href="/payment">Payment</a>
                <a className="active" href="/siblings">Siblings</a>
            </div>
            <div>
                <section className="special-container">
                    <h1 className="has-text-centered">Calendar</h1>
                </section>
                <section className="container">
                    <iframe title="Fall 2023 Calendar" src="https://docs.google.com/document/d/e/2PACX-1vT8ClTe46AJTTn58EMG-l7QTMgF4nccY5e6UPQOtaKz4mngr2kt3YNxHSCBUVITv-wIyDMNKE-EVkw9/pub?embedded=true" scrolling="auto" width="100%" height="700"></iframe>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Attendance</h1>
                </section>
                <section className="container-attendance-iframe">
                    <iframe title="PSP Attendance Site" src="https://www.pspakattendance.com" scrolling="auto" width="100%" height="400px"></iframe>
                </section>
                <section className="email-container">
                    <h4 className="has-text-centered"><a href="https://www.pspakattendance.com" target="_blank" rel="noreferrer">www.pspakattendance.com</a></h4>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Sibling Requirements</h1>
                </section>

                <section className="another-container has-text-centered">
                    <p>1 Service Event</p>
                    <p>1 Scholarship Event</p>
                    <p>1 Weekday Recruitment Event (Each Week)</p>
                    <p>Both Friday Recruitment Events</p>
                    <p>Retreat</p>
                    <p>Ritual</p>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Absences</h1>
                </section>
                
                <section className="no-space-container has-text-centered">
                    <p>You are allowed 2 absense from chapter this semester! One can be with no questions asked, and you must fill out the absense form for any others.</p>
                    <p>What counts as an excuse?</p>
                </section>
                <section className="container">
                    <iframe title="Excuse Document" src="https://docs.google.com/document/d/e/2PACX-1vTQYFvkkGNKEzLrxBTYWLyRyQKbxLNJntKy3TxIy2PIxY8AOSHJLXBeVUqgjvdddgYKS7cbiWGLlKHp/pub?embedded=true" scrolling="auto" width="100%" height="700"></iframe>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Chap-Up Archive</h1>
                </section>
                <section className="email-container">
                    <h4 className="has-text-centered">Follow this link to view past chap-up emails!</h4>
                    <h4 className="has-text-centered"><a href="https://linktr.ee/chap_up_archive" target="_blank" rel="noreferrer">https://linktr.ee</a></h4>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Sibling Directory</h1>
                </section>
                <section className="container">
                    <iframe title="Sibling Directory" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlrxSOF2xTEOhMBwLTyBTp3NJyifYUHEUaehKe5Z94c_dJre6bdAkS-sywQo4V1C7Mgd8wt7NTHcxV/pubhtml?widget=true&amp;headers=false" scrolling="auto" width="100%" height="700"></iframe>
                </section>
                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" target="_blank" rel="noreferrer" className="fa fa-instagram"> </a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2023</h1>
                    <a href="#top" className="fa fa-arrow-up"> </a>
                </section>
            </div>
        </div>
    )

}