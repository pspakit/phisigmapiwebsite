import { useNavigate } from "react-router-dom";

export default function About() {

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
                <a href="/">
                    <div className="logo-image">
                        <img src="https://phisigmapi.org/sites/default/files/2017-07/PSP_Shield_4c.png"></img>
                    </div>
                </a>
                <a className="active" href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
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
                    <h1 className="has-text-centered">Our Chapter</h1>
                </section>
                <section className="box">
                    <p className="has-text-centered">Information about PSP nationally</p>
                    <p className="has-text-centered">Information about Alpha Kappa chapter</p>
                    <p className="has-text-centered">Information about Tripod</p>
                </section>
                <section className="box">
                    <h1 className="has-text-centered">Leadership</h1>
                </section>
                <section className="box">
                    <h1 className="has-text-centered"></h1>
                </section>

                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" className="fa fa-instagram"></a>
                    <a></a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2022</h1>
                </section>
            </div>
        </div>
    )

}

/*export default function About() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>This is the about page</h1>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    )
} */