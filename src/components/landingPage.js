import { useNavigate } from "react-router-dom";

export default function Landing() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>This is the landing page</h1>
            <button onClick={() => navigate('/about')}>About Us</button>

        </div>
    )
}