import { Link } from "react-router-dom";

import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am VARSHINI S..</p>
                    <p>Software developer in Frontend</p>
                </h1>
                <Link to="about">
                    <button>More Info</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;