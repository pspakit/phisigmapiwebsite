
export default function Siblings() {

    return (
        <div id="top">
            <div className="topnav">
                <a href="/">
                    <div className="logo-image">
                        <img src="pictures/PSP_Shield_4c.png"></img>
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
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQDOBJxmAEu6d-XfxMHYAYOn2rTXbB9r8STY5pCBnNXhnTwZqtGN56hatZXf8FmDA1v7vrn2HxjnM3y/pub?embedded=true" scrolling="auto" width="100%" height="700"></iframe>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Attendance</h1>
                </section>
                <section className="container-attendance-iframe">
                    <iframe src="https://phisigattendance.netlify.app/needAccount" scrolling="auto" width="100%" height="400px"></iframe>
                </section>
                <section className="email-container">
                    <h4 className="has-text-centered"><a href="https://phisigattendance.netlify.app/needAccount" target="_blank">https://phisigattendance.netlify.app</a></h4>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Sibling Requirements</h1>
                </section>

                <section className="another-container has-text-centered">
                    <p>1 Service Event</p>
                    <p>1 Scholarship Event</p>
                    <p>2 Weekday Recruitment Events (Each Week)</p>
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
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTQYFvkkGNKEzLrxBTYWLyRyQKbxLNJntKy3TxIy2PIxY8AOSHJLXBeVUqgjvdddgYKS7cbiWGLlKHp/pub?embedded=true" scrolling="auto" width="100%" height="700"></iframe>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Chap-Up Archive</h1>
                </section>
                <section className="email-container">
                    <h4 className="has-text-centered">Follow this link to view past chap-up emails!</h4>
                    <h4 className="has-text-centered"><a href="https://linktr.ee/chap_up_archive" target="_blank">https://linktr.ee/chap_up_archive</a></h4>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Sibling Directory</h1>
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