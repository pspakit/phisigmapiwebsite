import { useNavigate } from "react-router-dom";

export default function Landing() {

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
                <a className="active" href="/">
                    <div className="logo-image">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.png"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>
                
                <div className="login-container">
                    <form id="siblingPageForm">
                        <input type="password" placeholder="Sibling Code" id="SiblingCode"></input>
                        <button type="button" onClick={handleClick}>Sibling Page</button>
                    </form>
                </div>
            </div>

            

            <div className="top-image">
                <div className="top-image-text">
                    <h1>PHI SIGMA PI</h1>
                    <h1>ALPHA KAPPA CHAPTER</h1>
                </div>
            </div>   

            <section className="special-container">
                <h1 className="has-text-centered">UNC’s Gender-Inclusive National Honor Fraternity</h1>
            </section>

            <div className="tripod-row">
                <div className="tripod-col">
                    <img src="pictures/Scholarship.jpg" alt="Scholarship Image"/>
                </div>
                <div className="tripod-col">
                    <img src="pictures/Leadership.jpg" alt="Leadership Image"></img>
                </div>
                <div className="tripod-col">
                    <img src="pictures/fellowship.jpg" alt="Fellowship Image"></img>
                </div>
            </div>

            <section className="footer-container">
                <a href="https://www.instagram.com/phisigmapiunc/" className="fa fa-instagram"></a>
                <a></a>
                <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                <h1 className="has-text-centered">2022</h1>
                <a></a>
                <a href="#top" className="fa fa-arrow-up"></a>
            </section>
        </div>
    )
    
}


    
