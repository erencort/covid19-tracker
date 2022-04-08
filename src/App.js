import "./App.css";
import InfoCard from "./components/InfoCard.jsx";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/infoSlice";
import Input from "./components/Input";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.info.data);
  const country = useSelector((state) => state.info.country);

  useEffect(() => {
    if (!country) {
      axios
        .get("https://covid19.mathdro.id/api")
        .then((res) => res.data)
        .then((data) => dispatch(setData(data)));
    } else {
      axios
        .get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then((res) => res.data)
        .then((data) => dispatch(setData(data)));
    }
  }, [country]);

  return (
    <div className="app">
      <div className="container">
        <h1>{country}</h1>
        {data ? (
          <div>
            <InfoCard
              color="red"
              heading="Infected"
              value={data.confirmed.value}
              desc="Number of active cases of covid-19"
            />
            <InfoCard
              color="yellow"
              heading="Recovered"
              value={data.recovered.value}
              desc="Number of recoveries from covid-19"
            />
            <InfoCard
              color="green"
              heading="Deaths"
              value={data.deaths.value}
              desc="Number of deaths caused by covid-19"
            />
          </div>
        ) : (
          "Loading..."
        )}
        <Input />
      </div>
    </div>
  );
}

export default App;
