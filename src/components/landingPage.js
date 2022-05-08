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

        <div>
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

            <section className="box has-text-centered">
                <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
            </section>

            <section className="box">
                <h1 className="has-text-centered">Phi Sigma Pi</h1>
                <h1 className="has-text-centered">Alpha Kappa Chapter</h1>
            </section>
            
            <section className="box">
                <h1 className="has-text-centered">Slideshow</h1>
            </section>   

            <section className="box">
                <h1 className="has-text-centered">UNC’s Gender-Inclusive National Honor Fraternity</h1>
            </section>
            <div className="columns">
                <div className="column">
                    <section className="box has-text-centered">
                        <h2>Scholarship</h2>
                    </section>
                    <section className="box has-text-centered">
                        <h2>Image</h2>
                    </section>
                </div>
                <div className="column">
                    <section className="box has-text-centered">
                        <h2>Leadership</h2>
                    </section>
                    <section className="box has-text-centered">
                        <h2>Image</h2>
                    </section>
                </div>
                <div className="column">
                    <section className="box has-text-centered">
                        <h2>Fellowship</h2>
                    </section>
                    <section className="box has-text-centered">
                        <h2>Image</h2>
                    </section>
                </div>
            </div>
        </div>
    )
    
}


    
