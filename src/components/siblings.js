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
                <a className="active" href="/siblings">Siblings</a>
            </div>
            <div>
                <section className="special-container">
                    <h1 className="has-text-centered">Calendar</h1>
                </section>
                <section className="container">
                    <iframe title="Fall 2022 Calendar" src="https://docs.google.com/document/d/e/2PACX-1vQDOBJxmAEu6d-XfxMHYAYOn2rTXbB9r8STY5pCBnNXhnTwZqtGN56hatZXf8FmDA1v7vrn2HxjnM3y/pub?embedded=true" scrolling="auto" width="100%" height="700"></iframe>
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
                    <p>Both Friday Recruitment Events (9/16, 9/23)</p>
                    <p>Retreat (10/8)</p>
                    <p>Ritual (11/12)</p>
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
                    <h4 className="has-text-centered"><a href="https://linktr.ee/chap_up_archive" target="_blank" rel="noreferrer">https://linktr.ee/chap_up_archive</a></h4>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Sibling Directory</h1>
                </section>
                <section className="container">
                    <iframe title="Sibling Directory" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vToDOTv7G0WIVzK6zzTpE3SgG3RusO90FmMhFiU61UEYjAvUgeu_KKUe3XbF0Vw6-eR-ybMiKDgLOu6/pubhtml?gid=1905347970&amp;single=true&amp;widget=true&amp;headers=false" scrolling="auto" width="100%" height="700"></iframe>
                </section>
                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" target="_blank" rel="noreferrer" className="fa fa-instagram"> </a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2022</h1>
                    <a href="#top" className="fa fa-arrow-up"> </a>
                </section>
            </div>
        </div>
    )

}