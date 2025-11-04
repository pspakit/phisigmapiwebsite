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
                <a className="active" href="/gallery">Gallery</a>
                <a href="/payment">Payment</a>
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
                    <h1 className="has-text-centered">Photo Gallery</h1>
                </section>

                <div className="row">
                    <div className="column">
                        <img src="Fall 2025_rvv.jpg" alt ="idk"></img>
                        <img src="pictures/presidents.jpg" alt="Presidents"></img>
                        <img src="pictures/spencer.jpg" alt="Spencer"></img>
                        <img src="pictures/hug.jpg" alt="Hug"></img>
                        <img src="pictures/supdogs.jpg" alt="Supdogs"></img>
                        <img src="pictures/girls_wearing_dresses.jpg" alt="Girls wearing dresses"></img>
                        <img src="pictures/girls_hat.jpg" alt="Girls hat"></img>
                        <img src="pictures/potluck.jpg" alt="Potluck"></img>
                        <img src="pictures/sleepover.jpg" alt="Sleepover"></img>
                        <img src="pictures/efe_trust.jpg" alt="Efe Trust"></img>
                        <img src="pictures/recruitment_table.jpg" alt="Recruitment Table"></img>
                        <img src="pictures/madeline_camilla.jpg" alt="Madeline and Camilla"></img>
                        <img src="pictures/soccer.jpg" alt="Soccer"></img>
                        <img src="pictures/drag.jpg" alt="Drag"></img>
                        <img src="pictures/mountain.jpg" alt="Mountain"></img>
                        <img src="pictures/damnesty.jpg" alt="Damnesty"></img>
                        <img src="pictures/kazoo.jpg" alt="Kazoo"></img>
                        <img src="pictures/zack_efe_ray.jpg" alt="Zack and Efe and Ray"></img>
                        <img src="pictures/snow.jpg" alt="Snow"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/lauren_will.jpg" alt="Lauren and will"></img>
                        <img src="pictures/squirrel_head.jpg" alt="Squirrel head"></img>
                        <img src="pictures/will_went_phi_sig.jpg" alt="Will went phi sig"></img>
                        <img src="pictures/tacos.jpg" alt="Tacos"></img>
                        <img src="pictures/paige_madeline.jpg" alt="Paige and Madeline"></img>
                        <img src="pictures/grass_arboretum_sit.jpg" alt="Arboretum Sit"></img>
                        <img src="pictures/yarn_girls.jpg" alt="Yarn girls"></img>
                        <img src="pictures/sundial.jpg" alt="Sundial"></img>
                        <img src="pictures/4_girls_with_sign.jpg" alt="4 girls with sign"></img>
                        <img src="pictures/basketballs.jpg" alt="Basketballs"></img>
                        <img src="pictures/football.jpg" alt="Football"></img>
                        <img src="pictures/madeline_sarz.jpg" alt="Madeline and Sarz"></img>
                        <img src="pictures/trust_fall.jpg" alt="Trust Fall"></img>
                        <img src="pictures/unc_football.jpg" alt="UNC Football"></img>
                        <img src="pictures/dance_group.jpg" alt="Dance group"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/brandon_mac.jpg" alt="Brandon and MacKenna"></img>
                        <img src="pictures/handshake.jpg" alt="Handshake"></img>
                        <img src="pictures/cards.jpg" alt="Cards"></img>
                        <img src="pictures/chelsea_emily.jpg" alt="Chelsea and Emily"></img>
                        <img src="pictures/ray_trent.jpg" alt="Ray and Trent"></img>
                        <img src="pictures/hiking.jpg" alt="Hiking"></img>
                        <img src="pictures/duck_goose.jpg" alt="Duck Goose"></img>
                        <img src="pictures/mountain_weekend.jpg" alt="Mountain Weekend"></img>
                        <img src="pictures/apple_throw.jpg" alt="Apple Throw"></img>    
                        <img src="pictures/trust_fall_girls.jpg" alt="Trust Fall Girls"></img>
                        <img src="pictures/4_girls.jpg" alt="4 Girls"></img>
                        <img src="pictures/best_fam.jpg" alt="Best Fam"></img>
                        <img src="pictures/grass.jpg" alt="Grass"></img>
                        <img src="pictures/more_trust.jpg" alt="More Trust"></img>
                        <img src="pictures/waffle.jpg" alt="Waffle"></img>
                        <img src="pictures/paddle.jpg" alt="Paddle"></img>
                        <img src="pictures/paint.jpg" alt="Paint"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/dresses.jpg" alt="Dresses"></img>
                        <img src="pictures/chris_sav.jpg" alt="Chris and Sav"></img>
                        <img src="pictures/hiking_girls.jpg" alt="Hiking Girls"></img>
                        <img src="pictures/sarz_kazoo.jpg" alt="Sarz Kazoo"></img>
                        <img src="pictures/ninja.jpg" alt="Ninja"></img>
                        <img src="pictures/in_the_tux.jpg" alt="Tuxedo"></img>
                        <img src="pictures/girls_wilson.jpg" alt="Girls Wilson"></img>
                        <img src="pictures/sitting_on_grass.jpg" alt="Sitting on Grass"></img>
                        <img src="pictures/another_welcome_to_fam.jpg" alt="Welcome to the family"></img>
                        <img src="pictures/beta_omicron.jpg" alt="Beta Omicrons"></img>
                        <img src="pictures/I_went_phi_sig.jpg" alt="I went phi sig"></img>
                        <img src="pictures/rose.jpg" alt="Rose"></img>
                        <img src="pictures/welcome_to_fam.jpg" alt="Welcome to the family again"></img>
                        <img src="pictures/tinfoil.jpg" alt="Tinfoil"></img>
                        <img src="pictures/tin.jpg" alt="Tin"></img>
                    </div>
                    <div className="column">
                        <img src="pictures/heart_squirrel.jpg" alt="Heart Squirrel"></img>
                        <img src="pictures/sav_hally.jpg" alt="Sav and Hally"></img>
                        <img src="pictures/lauren_sarah_emily.jpg" alt="Lauren Sarah and Emily"></img>
                        <img src="pictures/coffee.jpg" alt="Coffee"></img>
                        <img src="pictures/dunkin.jpg" alt="Dunkin"></img>
                        <img src="pictures/lots_of_girls.jpg" alt="Lots of girls"></img>
                        <img src="pictures/sarah_emily.jpg" alt="Sarah and Emily"></img>
                        <img src="pictures/grace_sam_mountains.jpg" alt="Grace and Sam in the mountains"></img>
                        <img src="pictures/bid_breakfast_rain.jpg" alt="Bid Breakfast Raining"></img>
                        <img src="pictures/kazoo_on_steps.jpg" alt="Kazoo on steps"></img>
                        <img src="pictures/arboretum.jpg" alt="Arboretum"></img>
                        <img src="pictures/campus_y.jpg" alt="Campus Y"></img>
                        <img src="pictures/josh_lauren.jpg" alt="Josh and Lauren"></img>
                        <img src="pictures/shirts.jpg" alt="Shirts"></img>
                        <img src="pictures/semi.jpg" alt="Semi"></img>
                        <img src="pictures/jj.jpg" alt="JJ"></img>
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
