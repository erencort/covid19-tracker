import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { countryList } from "../countries";
import { setCountry } from "../redux/infoSlice";

function Input() {
  const dispatch = useDispatch();
  const [querry, setQuerry] = useState();

  useEffect(() => {
    dispatch(setCountry(querry));
  }, [querry]);
  return (
    <div>
      <select onChange={(e) => setQuerry(e.target.value)}>
        {countryList.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Input;
