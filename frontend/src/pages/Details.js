import React from "react";
import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import shoesActions from "../redux/actions/shoesActions";
import { SpinnerCircular } from "spinners-react";

const Details = () => {
  const { id } = useParams();
  // console.log("🆔 ~ file: Shop.jsx ~ line 24 ~ Shoop ~ id", id)

  const [shoes, setShoes] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  useEffect(() => {
    dispatch(shoesActions.getOneShoe(id)).then((res) =>
      setShoes(res.data.response)
    );
    // eslint-disable-next-line
  }, []);

  //   console.log("🚀 ~ file: Details.js ~ line 14 ~ Details ~ shoes", shoes)

  // const handleIDshoe = async (id) => {
  // 	// console.log(id)
  // 	const res = await dispatch(shoesActions.getOneShoe(id));
  // 	console.log(res.data.response);
  // };

  return (
    <div style={{ backgroundColor: "#FFFDF6" }}>
      {/* contenedor principal */}
      <div
        className="mb-4 flex items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        {loading ? <SpinnerCircular /> : <DetailCard shoes={shoes} />}
      </div>
    </div>
  );
};

export default Details;
