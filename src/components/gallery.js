import { useNavigate } from "react-router-dom";

export default function Gallery() {

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
                <a href="/recruitment">Recruitment</a>
                <a className="active" href="/gallery">Gallery</a>

                <div className="login-container">
                    <form id="siblingPageForm">
                        <input type="password" placeholder="Sibling Code" id="SiblingCode"></input>
                        <button type="button" onClick={handleClick}>Sibling Page</button>
                    </form>
                </div>
                
            </div>
            <div>
                <section className="box">
                    <h1 className="has-text-centered">PHOTO GALLERY</h1>
                </section>
                <section className="box">
                    <h1 className="has-text-centered">SCHOLARSHIP</h1>
                </section>
                
                <div className="row">
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                </div>

                <section className="box">
                    <h1 className="has-text-centered">LEADERSHIP</h1>
                </section>

                <div className="row">
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.jpg"></img>
                    </div>
                </div>

                <section className="box">
                    <h1 className="has-text-centered">FELLOWSHIP</h1>
                </section>
                <section className="box">
                    <h1 className="has-text-centered">Event</h1>
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