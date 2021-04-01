import "./style.css";

const About = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <ul>Languages:</ul>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                </div>
                <div>
                    <ul>Libraries:</ul>
                    <li>Bootstrap</li>
                    <li>antd.ui</li>
                    <li>Material-ui</li>
                    <li>React.js</li>
                </div>
                <div>
                    <ul>Tools:</ul>
                    <li>Eslint</li>
                    <li>Webpack</li>
                    <li>Chrome Dev</li>
                    <li>Github</li>
                </div>

            </div>
        </div>
    );
};

export default About;