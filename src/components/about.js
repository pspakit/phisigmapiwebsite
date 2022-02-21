import { useNavigate } from "react-router-dom";

export default function About() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>This is the about page</h1>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    )
}