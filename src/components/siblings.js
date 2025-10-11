export default function Siblings() {
  return (
    <div id="top">
      {/* ✅ Wrap ALL content inside one single div */}
      <div>
        <div className="topnav">
          <a href="/">
            <div className="logo-image">
              <img src="pictures/PSP_Shield_4c.png" alt="PSP Shield" />
            </div>
          </a>
          <a href="/about">About</a>
          <a href="/recruitment">Recruitment</a>
          <a href="/gallery">Gallery</a>
          <a href="/payment">Payment</a>
          <a className="active" href="/siblings">
            Siblings
          </a>
        </div>

        {/* ---- ATTENDANCE + FLARE ---- */}
        <div>
          <section className="special-container">
            <h1 className="has-text-centered">Attendance</h1>
          </section>

          <section className="email-container">
            <h4 className="has-text-centered">
              <a
                href="https://flare-event.app.link/KrQ8DSaKmXb"
                target="_blank"
                rel="noreferrer"
              >
                Join Our Flare!
              </a>
            </h4>
          </section>

          <section className="email-container">
            <h4 className="has-text-centered">
              <a
                href="https://docs.google.com/presentation/d/1gr20qzGZqRTzWHl_PQlN4WBGIs1uAvmUyxYsmF8tf9k/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                How-To: Attendance on Flare
              </a>
            </h4>
          </section>
                  
          <section className="email-container">
            <h4 className="has-text-centered">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_7KowF93kMQzNaV36cXXNOAt5TGSHH-NjxndHvfqO4axHFQ/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Absence Excuse Form
              </a>
            </h4>
          </section>
              
        </div>

        {/* ---- POINT FORM ---- */}
        <section className="special-container">
          <h1 className="has-text-centered">Point Form</h1>
        </section>

        <section className="email-container">
          <h4 className="has-text-centered">
            <a
              href="https://go.unc.edu/pointsform"
              target="_blank"
              rel="noreferrer"
            >
              Submit your points for your house here!
            </a>
          </h4>
        </section>

        <section className="email-container">
          <h4 className="has-text-centered">
            <a
              href="https://go.unc.edu/houses"
              target="_blank"
              rel="noreferrer"
            >
              Check what house you are and your points!
            </a>
          </h4>
        </section>

        {/* ---- SIBLING REQUIREMENTS ---- */}
        <section className="special-container">
          <h1 className="has-text-centered">Sibling Requirements</h1>
        </section>

        <section className="another-container has-text-centered">
          <p>1 Service Event</p>
          <p>1 Scholarship Event</p>
          <p>1 Leadership Event</p>
          <p>1 Weekday Recruitment Event (Each Week)</p>
          <p>Both Friday Recruitment Events</p>
          <p>Retreat</p>
          <p>Ritual</p>
        </section>

        {/* ---- ABSENCES ---- */}
        <section className="special-container">
          <h1 className="has-text-centered">Absences</h1>
        </section>

        <section className="no-space-container has-text-centered">
          <p>
            You are allowed 2 absences from chapter this semester! One can be
            with no questions asked, and you must fill out the absence form for
            any others.
          </p>
          <p>What counts as an excuse?</p>
        </section>

        <section className="container">
          <iframe
            title="Excuse Document"
            src="https://docs.google.com/document/d/e/2PACX-1vTQYFvkkGNKEzLrxBTYWLyRyQKbxLNJntKy3TxIy2PIxY8AOSHJLXBeVUqgjvdddgYKS7cbiWGLlKHp/pub?embedded=true"
            scrolling="auto"
            width="100%"
            height="700"
          ></iframe>
        </section>

        {/* ---- CHAP-UP ARCHIVE ---- */}
        <section className="special-container">
          <h1 className="has-text-centered">Chap-Up Archive</h1>
        </section>

        <section className="email-container">
          <h4 className="has-text-centered">
            Follow this link to view past chap-up emails!
          </h4>
          <h4 className="has-text-centered">
            <a
              href="https://linktr.ee/chap_up_archive"
              target="_blank"
              rel="noreferrer"
            >
              https://linktr.ee
            </a>
          </h4>
        </section>

        {/* ---- SIBLING DIRECTORY ---- */}
        <section className="special-container">
          <h1 className="has-text-centered">Sibling Directory</h1>
        </section>

        <section className="container">
          <iframe
            title="Sibling Directory"
            src="https://docs.google.com/spreadsheets/d/13oz7aVfSRDPN_383d2G-QR63aqhWVs7WqJcGszQOCVc/edit?widget=true&amp;headers=false"
            scrolling="auto"
            width="100%"
            height="700"
          ></iframe>
        </section>

        {/* ---- FOOTER ---- */}
        <section className="footer-container">
          <a
            href="https://www.instagram.com/phisigmapiunc/"
            target="_blank"
            rel="noreferrer"
            className="fa fa-instagram"
          >
            {" "}
          </a>
          <h1 className="has-text-centered">
            PHI SIGMA PI - ALPHA KAPPA CHAPTER
          </h1>
          <h1 className="has-text-centered">2024</h1>
          <a href="#top" className="fa fa-arrow-up"> </a>
        </section>
      </div>
    </div>
  );
}
