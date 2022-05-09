import { useNavigate } from "react-router-dom";

export default function Recruitment() {

    const navigate = useNavigate();
    const handleClick = e => {
         if (document.getElementById("SiblingCode").value === "pspak" || document.getElementById("SiblingCode").value === "PSPAK") {
            navigate("/siblings")
         } else {
            alert("The sibling code you entered was incorrect. Try again!")
         }
    }

    return (
        <div id="top">
            <div className="topnav">
                <a href="/">
                    <div className="logo-image">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.png"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a className="active" href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>

                <div className="login-container">
                    <form id="siblingPageForm">
                        <input type="password" placeholder="Sibling Code" id="SiblingCode"></input>
                        <button type="button" onClick={handleClick}>Sibling Page</button>
                    </form>
                </div>
                
            </div>
            <div>
                <section className="box">
                    <h1 className="has-text-centered">RECRUITMENT TIMELINE</h1>
                </section>
                <section className="recruitment-schedule-container">
                    <h4 className="has-text-centered">[  FALL 2022 RECRUITMENT SCHEDULE COMING SOON!  ]</h4>
                </section>
                <section className="box has-text-centered">
                    <h4>HOW MANY RECRUITMENT EVENTS DO I NEED TO ATTEND?</h4>
                </section>

                <div className="rectangular-column-container">
                    <div className="rectangular-column">
                        <p>You will have several opportunities over a two-week period to get to know current chapter members</p>
                    </div>
                    <div className="rectangular-column">
                        <p>Potential new members (PNMs) must attend one weekday event and the Friday Social event each week to fulfill their attendance requirements</p>
                    </div>
                    <div className="rectangular-column">
                        <p>Flexibility about attendance will be extended if personal circumstances or conflicts arise - just communicate with the Recruitment Advisors</p>
                    </div>
                </div>

                <div className="spacing-container">
                    <p>  </p>
                </div>

                <section className="box has-text-centered">
                    <h4>WHAT DOES MY FULL RECRUITMENT TIMELINE LOOK LIKE?</h4>
                </section>
                <section className="timeline">
                    <div className="time-container left">
                        <div className="content">
                        <p>Connect with us on social media (@phisigmapiunc)</p>
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
                        <p>Submit your fact sheet application to the recruitment advisors before the end of recruitment</p>
                        </div>
                    </div>
                </section>
                <section className="box">
                    <h1 className="has-text-centered">MEMBERSHIP REQUIREMENTS</h1>
                </section>
                <section className="box">
                    <h4 className="has-text-centered">ARE YOU ELIGIBLE FOR RECRUITMENT?</h4>
                    <p className="has-text-centered">NEW MEMBERSHIP QUALIFICATIONS INCLUDE...</p>
                </section>

                <fieldset>
                    <div>
                        <input type="checkbox" id="1"></input>
                        <label for="1"> Must have a 3.0 UNC GPA</label>
                    </div>
                    <br></br>
                    <div>
                        <input type="checkbox" id="2"></input>
                        <label for="2"> Must have been a UNC student for at least one semester and have at least 3 semesters left at UNC</label>
                    </div>
                    <br></br>
                    <div>
                        <input type="checkbox" id="3"></input>
                        <label for="3"> Must be available for Initiate Chapter meetings on Wednesdays from 6:00 - 7:30 PM</label>
                    </div>
                    <br></br>
                    <div>
                        <input type="checkbox" id="4"></input>
                        <label for="4"> Must fulfill the recruitment attendance requirements (be present at 1 weekday event and the Friday event each week) in addition to completing the fact sheet application and submitting it on time to the Recruitment Advisors</label>
                    </div>
                </fieldset>

                <section className="box">
                    <h4 className="has-text-centered">WHAT ARE WE LOOKING FOR IN OUR NEW MEMBERS?</h4>
                </section>

                <section className="container has-text-centered">
                    <p>We want to extend our community and friendship to Carolina undergraduates looking to find their niche on campus</p>
                    <p>Here are some of the things we would love to see in our new members...</p>
                </section>

                <div className="spacing-container">
                    <p>  </p>
                </div>

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

                <div className="spacing-container">
                    <p>  </p>
                </div>

                <section className="box">
                    <h4 className="has-text-centered">WHAT HAPPENS IF YOU RECEIVE A BID AND BECOME AN INITIATE?</h4>
                </section>

                <section className="container has-text-centered">
                    <p>You will complete a six-week Initiate period under the guidance of the Initiate Advisors</p>
                    <p>The Initiate Period includes a pinning ceremony, attending weekly meetings on Wednesdays, receiving a Big Sibling and Family, meeting one-on-one with chapter members, going on a bonding retreat, planning chapter events, and more</p>
                    <p>The initiate period will conclude with the Ritual in which you will be inducted as a full member if all Initiation requirements are met</p>
                    <p>For sake of transparency, the total cost of initiate finances is $270, which can be paid in full at the first Initiate chapter meeting or in installments over the Initiate period</p>
                    <p>Semester membership dues help us maintain our status as a National organization and greatly assist our leadership team with the planning and execution of fun events and rewarding experiences</p>
                    <p>Some dues relief and financial assistance can be offered to initiates each semester</p>
                </section>

                <div className="spacing-container">
                    <p>  </p>
                </div>

                <section className="box">
                    <h4 className="has-text-centered">Please direct any questions in the weeks prior or during Recruitment to the Recruitment Advisors at:</h4>
                    <h4 className="has-text-centered"><a href="mailto:pspakrecruitment@gmail.com">pspakrecruitment@gmail.com</a></h4>
                </section>

                <section className="box">
                    <h1 className="has-text-centered">RECRUITMENT MATERIALS</h1>
                </section>
                <section className="recruitment-schedule-container">
                    <h4 className="has-text-centered">[  FALL 2022 RECRUITMENT FACT SHEET  ]</h4>
                </section>

                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" className="fa fa-instagram"></a>
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