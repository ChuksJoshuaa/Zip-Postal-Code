import React from "react";
import styled from "styled-components";
import { useZipContext } from "../contexts/zip_contexts";
import Loading from "../components/Loading";

const Result = () => {
  const { zip_loading: loading, zip } = useZipContext();

  if (loading) {
    return <Loading />;
  }

  if (zip.length < 1) {
    return (
      <h2 className="section-title">
        no zip code matched your search criteria
      </h2>
    );
  }

  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <div className="head main">
        {zip.map((data, index) => {
          const {
            ZipCode,
            City,
            State,
            County,
            Latitude,
            Longitude,
            CityStateKey,
            Elevation,
            TimeZone,
          } = data;
          return (
            <div key={index} className="zip-head">
              <h3>Valid Information</h3>
              <h1>ZipCode: {ZipCode}</h1>
              <h1>City: {City}</h1>
              <h1>State: {State} </h1>
              <h2>County: {County} </h2>
              <h2>Latitude: {Latitude}</h2>
              <h2>Longitude: {Longitude}</h2>
              <h2>CityStateKey: {CityStateKey}</h2>
              <h2>Elevation: {Elevation}</h2>
              <h2>Timezone: {TimeZone}</h2>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 5%;

  .head {
    padding: 1rem 0;
    height: auto;
  }
  .main {
    padding-bottom: 0;
  }

  .zip-head {
    width: 85vw;
    margin: 0 auto;
    max-width: 40rem;
    height: auto;
    background: white;
    padding: 1.8rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  }

  .zip-head h1,
  h2 {
    margin: 10px;
    font-size: 1.3rem;
    letter-spacing: 0.125rem;
    font-weight: 400;
    color: #222;
    font-family: "Rajdhani", sans-serif;
  }

  .zip-head h3 {
    font-size: 1.7rem;
    letter-spacing: 0.125rem;
    font-weight: 700;
    color: crimson;
    font-family: "Rajdhani", sans-serif;
    text-align: center;
  }
`;

export default Result;
