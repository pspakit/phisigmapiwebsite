import { useNavigate } from "react-router-dom";

export default function Landing() {

    const openPop = o => {
        document.getElementById("loginForm").style.display = "block";
    }

    const closePop = c => {
        document.getElementById("loginForm").style.display = "none";
    }
   
    return (

        <div id="top">
            <div className="topnav">
                <a className="active" href="/">
                    <div className="logo-image">
                        <img src="pictures/PSP_Shield_4c.png"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>
                <a onClick={openPop}>Siblings</a>

                <div className="form-popup" id="loginForm">
                    <form action="/siblings" className="form-container">
                        <h1>Sibling Login</h1>
                        <label name="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="email" required></input>
                        <label name="password">Password</label>
                        <input type="password" placeholder="Enter Password" name="password" required></input>
                        <button type="submit" className="btn">Login</button>
                        <button type="button" className="btn cancel" onClick={closePop}>Close</button>
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

            <section className="special-container has-text-centered">
                    <h4>Potential new members should visit the Recruitment page to learn more about this semester's recruitment!</h4>
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

            <section className="special-container">
                <h1 className="has-text-centered">Join Now!</h1>
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
    )
    
}


    
