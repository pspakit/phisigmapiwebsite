import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Firebase Stuff
import { 
  getAuth, 
  signInWithEmailAndPassword } from 'firebase/auth'

export default function Gallery() {

    const openPop = o => {
        document.getElementById("loginForm").style.display = "block";
    }

    const closePop = c => {
        document.getElementById("loginForm").style.display = "none";
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uid, setUID] = useState('');

    const nav = useNavigate();

    const loginAction = (e) => {
        e.preventDefault();
        const authen = getAuth();
        signInWithEmailAndPassword(authen, email, password)
        .then((response) => {
            setUID(response.user.uid);
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
                        <img src="pictures/PSP_Shield_4c.png"></img>
                    </div>
                </a>
                <a href="/about">About</a>
                <a href="/recruitment">Recruitment</a>
                <a className="active" href="/gallery">Gallery</a>
                <a onClick={openPop}>Siblings</a>

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
                    <h1 className="has-text-centered">Photo Gallery</h1>
                </section>
                
                <div className="row">
                    <div className="column">
                        <img src="pictures/presidents.jpg"></img>
                        <img src="pictures/spencer.jpg"></img>
                        <img src="pictures/hug.jpg"></img>
                        <img src="pictures/supdogs.jpg"></img>
                        <img src="pictures/girls_wearing_dresses.jpg"></img>
                        <img src="pictures/girls_hat.jpg"></img>
                        <img src="pictures/potluck.jpg"></img>
                        <img src="pictures/sleepover.jpg"></img>
                        <img src="pictures/efe_trust.jpg"></img>
                        <img src="pictures/recruitment_table.jpg"></img>
                        <img src="pictures/madeline_camilla.jpg"></img>
                        <img src="pictures/soccer.jpg"></img>
                        <img src="pictures/drag.jpg"></img>
                        <img src="pictures/mountain.jpg"></img>
                        <img src="pictures/damnesty.jpg"></img>
                        <img src="pictures/kazoo.jpg"></img>
                        <img src="pictures/zack_efe_ray.jpg"></img>
                        <img src="pictures/snow.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/lauren_will.jpg"></img>
                        <img src="pictures/squirrel_head.jpg"></img>
                        <img src="pictures/will_went_phi_sig.jpg"></img>
                        <img src="pictures/tacos.jpg"></img>
                        <img src="pictures/paige_madeline.jpg"></img>
                        <img src="pictures/grass_arboretum_sit.jpg"></img>
                        <img src="pictures/yarn_girls.jpg"></img>
                        <img src="pictures/sundial.jpg"></img>
                        <img src="pictures/4_girls_with_sign.jpg"></img>
                        <img src="pictures/basketballs.jpg"></img>
                        <img src="pictures/football.jpg"></img>
                        <img src="pictures/madeline_sarz.jpg"></img>
                        <img src="pictures/trust_fall.jpg"></img>
                        <img src="pictures/unc_football.jpg"></img>
                        <img src="pictures/dance_group.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/brandon_mac.jpg"></img>
                        <img src="pictures/handshake.jpg"></img>
                        <img src="pictures/cards.jpg"></img>
                        <img src="pictures/chelsea_emily.jpg"></img>
                        <img src="pictures/ray_trent.jpg"></img>
                        <img src="pictures/hiking.jpg"></img>
                        <img src="pictures/duck_goose.jpg"></img>
                        <img src="pictures/mountain_weekend.jpg"></img>
                        <img src="pictures/apple_throw.jpg"></img>    
                        <img src="pictures/trust_fall_girls.jpg"></img>
                        <img src="pictures/4_girls.jpg"></img>
                        <img src="pictures/best_fam.jpg"></img>
                        <img src="pictures/grass.jpg"></img>
                        <img src="pictures/more_trust.jpg"></img>
                        <img src="pictures/waffle.jpg"></img>
                        <img src="pictures/paddle.jpg"></img>
                        <img src="pictures/paint.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/dresses.jpg"></img>
                        <img src="pictures/chris_sav.jpg"></img>
                        <img src="pictures/hiking_girls.jpg"></img>
                        <img src="pictures/sarz_kazoo.jpg"></img>
                        <img src="pictures/ninja.jpg"></img>
                        <img src="pictures/in_the_tux.jpg"></img>
                        <img src="pictures/girls_wilson.jpg"></img>
                        <img src="pictures/sitting_on_grass.jpg"></img>
                        <img src="pictures/another_welcome_to_fam.jpg"></img>
                        <img src="pictures/beta_omicron.jpg"></img>
                        <img src="pictures/I_went_phi_sig.jpg"></img>
                        <img src="pictures/rose.jpg"></img>
                        <img src="pictures/welcome_to_fam.jpg"></img>
                        <img src="pictures/tinfoil.jpg"></img>
                        <img src="pictures/tin.jpg"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/heart_squirrel.jpg"></img>
                        <img src="pictures/sav_hally.jpg"></img>
                        <img src="pictures/lauren_sarah_emily.jpg"></img>
                        <img src="pictures/coffee.jpg"></img>
                        <img src="pictures/dunkin.jpg"></img>
                        <img src="pictures/lots_of_girls.jpg"></img>
                        <img src="pictures/sarah_emily.jpg"></img>
                        <img src="pictures/grace_sam_mountains.jpg"></img>
                        <img src="pictures/bid_breakfast_rain.jpg"></img>
                        <img src="pictures/kazoo_on_steps.jpg"></img>
                        <img src="pictures/arboretum.jpg"></img>
                        <img src="pictures/campus_y.jpg"></img>
                        <img src="pictures/josh_lauren.jpg"></img>
                        <img src="pictures/shirts.jpg"></img>
                        <img src="pictures/semi.jpg"></img>
                        <img src="pictures/jj.jpg"></img>
                    </div>
                </div>

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