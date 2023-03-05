import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Firebase Stuff
import { 
  getAuth, 
  signInWithEmailAndPassword } from 'firebase/auth'

export default function Payment() {

    const openPop = o => {
        document.getElementById("loginForm").style.display = "block";
    }

    const closePop = c => {
        document.getElementById("loginForm").style.display = "none";
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [uid, setUID] = useState('');

    const nav = useNavigate();

    const loginAction = (e) => {
        e.preventDefault();
        const authen = getAuth();
        signInWithEmailAndPassword(authen, email, password)
        .then((response) => {
            //setUID(response.user.uid);
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            nav('/siblings')
        })
        .catch((error) => {
            console.log(error);
            alert("Bad Info!");
        })
    }

    return (
        <div id="top">
            <div className="topnav">
                <a href="/">
                    <div className="logo-image">
                        <img src="pictures/PSP_Shield_4c.png" alt="PSP Shield"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
                <a href="/gallery">Gallery</a>
                <a className="active" href="/payment">Payment</a>
                <a href="#top" onClick={openPop}>Siblings</a>

                <div className="form-popup" id="loginForm">
                    <form className="form-container">
                        <h1>Sibling Login</h1>
                        <label name="email">Email</label>
                        <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} name="email" required></input>
                        <label name="password">Password</label>
                        <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} name="password" required></input>
                        <button type="submit" onClick={loginAction} className="btn">Login</button>
                        <button type="button" className="btn cancel" onClick={closePop}>Close</button>
                    </form>
                </div>
                
            </div>
            <div>
                <section className="special-container">
                    <h1 className="has-text-centered">Dues</h1>
                </section>

                <section className="special-container has-text-centered">
                    <h4>Stripe</h4>
                </section>

                <section className="container">
                    <p className="has-text-centered">Our chapter has decided to use the payment processing platform Stripe to collect both <b>initiate</b> and <b>sibling</b> dues this semester!</p>
                </section>

                <section className="special-container has-text-centered">
                    <h4>Payment Links</h4>
                </section>

                <section className="special-qualification-container">
                    <p className="has-text-centered">What should I do?</p>
                </section>

                <section className="another-container has-text-centered">
                    <p>If you are an initiate, use the <b>initiate payment link</b> found below</p>
                </section>

                <section className="link-container">
                    <h4 className="has-text-centered"><a href="https://buy.stripe.com/4gwaIJ7yG7Migww7st" target="_blank" rel="noreferrer">Initiate Payment Link</a></h4>
                </section>

                <section className="another-container has-text-centered">
                    <p>If you are a sibling, use the <b>sibling payment link</b> found below</p>
                </section>

                <section className="link-container">
                    <h4 className="has-text-centered"><a href="https://buy.stripe.com/8wM1896uCc2y6VWaEE" target="_blank" rel="noreferrer">Sibling Payment Link</a></h4>
                </section>

                <section className="special-qualification-container">
                    <p className="has-text-centered">Once you have navigated to the appropriate stripe page...</p>
                </section>

                <section className="another-container has-text-centered">
                    <p>If you would like to pay the dues <b>in full</b>, change the quantity to 3</p>
                    <p>Initiates: $276 | Siblings: $171</p>
                    <p>If you are paying an <b>installment</b> of the payment plan, keep the quantity at 1</p>
                    <p>Enter your card information</p>
                    <p>Hit pay</p>
                </section>

                <section className="special-container has-text-centered">
                    <h4>For Reference</h4>
                </section>

                <div className="mission-row2">
                    <div className="mission-col2">
                        <img src="pictures/pspak_dues_initiates.jpg" alt="Initiate Dues"></img>
                    </div>
                    <div className="mission-col2">
                        <img src="pictures/pspak_dues_sibs.jpg" alt="Sibling Dues"></img>
                    </div>
                </div>
                <div className="mission-row2">
                    <div className="mission-col2">
                        <img src="pictures/initiate_dues_full.jpg" alt="Initiate Dues"></img>
                    </div>
                    <div className="mission-col2">
                        <img src="pictures/sib_dues_full.jpg" alt="Sibling Dues"></img>
                    </div>
                </div>

                <section className="footer-container">
                    <a href="https://www.instagram.com/phisigmapiunc/" target="_blank" rel="noreferrer" className="fa fa-instagram"> </a>
                    <h1 className="has-text-centered">PHI SIGMA PI - ALPHA KAPPA CHAPTER</h1>
                    <h1 className="has-text-centered">2023</h1>
                    <a href="#top" className="fa fa-arrow-up"> </a>
                </section>
            </div>
        </div>
    )

}