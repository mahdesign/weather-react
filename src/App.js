import Search from "./Search";
import City from "./City";
import Tempreture from "./Tempreture";
import Forcast from "./Forcast";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <Search />
              <City
                cityName="Tehran"
                date={"Friday  17:17"}
                description="Few Clouds"
              />
            </div>
            <Tempreture humidity={50} wind={4} degree={10} />
            <div className="weather-forcast">
              <div className="row">
                <Forcast
                  day="Fri"
                  maxTempreture={10}
                  minTempreture={7}
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                />
                <Forcast
                  day="Sat"
                  maxTempreture={12}
                  minTempreture={6}
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                />
                <Forcast
                  day="Sun"
                  maxTempreture={13}
                  minTempreture={8}
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                />
                <Forcast
                  day="Sat"
                  maxTempreture={12}
                  minTempreture={8}
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                />
                <Forcast
                  day="Mon"
                  maxTempreture={13}
                  minTempreture={7}
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                />
                <Forcast
                  day="Wed"
                  maxTempreture={12}
                  minTempreture={8}
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                />
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/mahdesign/vanila-weather-app"
              target="_blanck"
            >
              Open-Source code
            </a>
            by mahdesign
          </small>
        </div>
      </div>
    </div>
  );
}
