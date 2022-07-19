
export default function Siblings() {

    return (
        <div id="top">
            <div className="topnav">
                <a href="/">
                    <div className="logo-image">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.png"></img>
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
                    <p>1 Weekday Recruitment Event (Each Week)</p>
                    <p>Both Friday Recruitment Events</p>
                </section>
                <section className="special-container">
                    <h1 className="has-text-centered">Absences</h1>
                </section>
                <section className="another-container has-text-centered">
                    <p>We want to extend our community and friendship to Carolina undergraduates looking to find their niche on campus</p>
                    <p>Here are some of the things we would love to see in our new members...</p>
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