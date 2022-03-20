//import { useNavigate } from "react-router-dom";

export default function About() {

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
                <a href="/siblings">Siblings</a>
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