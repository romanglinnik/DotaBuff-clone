import "./index.scss";
import Button from "../../base/Button";

const HomePage = () => {
    return (
        <div className="home-section">
            <div className="title-container">
                <h1>DotaBuff</h1>
                <h2>Информационная платформа Dota 2</h2>
                <Button>
                    Запросить отдельный матч
                </Button>
            </div>
        </div>
    )
}

export default HomePage;