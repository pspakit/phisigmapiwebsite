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

            

            <div className="top-image">
                <div className="top-image-text">
                    <h1>PHI SIGMA PI</h1>
                    <h1>ALPHA KAPPA CHAPTER</h1>
                </div>
            </div>   

            <section className="box">
                <h1 className="has-text-centered">UNC’s Gender-Inclusive National Honor Fraternity</h1>
            </section>

            <section className="box">
                <h1 className="has-text-centered">Slideshow</h1>
            </section>

            <div className="tripod-row">
                <div className="tripod-col">
                    <img src="./components/Scholarship.jpg"></img>
                </div>
                <div className="tripod-col">
                    <img src="./components/Leadership.jpg"></img>
                </div>
                <div className="tripod-col">
                    <img src="./components/fellowship.jpg"></img>
                </div>
            </div>

            <section className="pic-col-container">
                <div className="pic-col">
                    <img src="https://images.squarespace-cdn.com/content/v1/5e9f4d9625c3400ed93fbe67/1596056857620-921THRVLSLZ05KZT8UTR/PSP_Shield_Horizontalwordmark_4c.jpg"></img>
                </div>
                <div className="pic-col">
                    <img src="https://logos-world.net/wp-content/uploads/2021/11/UNC-Logo.png"></img>
                </div>
            </section>

        </div>
    )
    
}


    
