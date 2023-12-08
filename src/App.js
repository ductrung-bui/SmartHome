import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faBell,
  faDroplet,
  faLightbulb,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <div style={{  width: "80%", marginLeft: "7%", border: "3px solid red", padding: "30px", borderRadius: "10px", backgroundColor: "#fff" }}>
        <header style={{ fontSize: "50px", color: "#7b4425",}}>
          SMART HOME
        </header>
        <div style={{ display: "flex" }}>
          <div className="container">
            <div className="blockContent">
              <div className="nhietDo">Nhiệt độ:</div>
              <div className="nhietDo">33.3 C</div>
              <FontAwesomeIcon className="icon" icon={faTemperatureLow} />
            </div>
            <div className="iconContent">
              <div style={{ fontSize: "25px" }}>Đèn chiếu sáng</div>
              <FontAwesomeIcon className="iconLight" icon={faLightbulb} />
              <div style={{ gap: "10px" }}>
                <button className="lightButton">On</button>
                <button className="lightButton">Off</button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="blockContent">
              <div className="nhietDo">Âm thanh:</div>
              <div className="nhietDo">70%</div>
              <FontAwesomeIcon
                className="icon"
                style={{ color: "black" }}
                icon={faVolumeHigh}
              />
            </div>
            <div className="iconContent">
              <div style={{ fontSize: "25px" }}>Đèn chiếu sáng</div>
              <FontAwesomeIcon className="iconLight" icon={faLightbulb} />
              <div style={{ gap: "10px" }}>
                <button className="lightButton">On</button>
                <button className="lightButton">Off</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
