import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Alert from "../components/Alert";
import styled from "styled-components";
import { Link } from "react-router-dom";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const Validate = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name.length < 5 || name.length > 5) {
      showAlert(true, "danger", "zip code must be 5 digits");
    } else {
      showAlert(true, "success", "zip code added to the list");
      const newItem = { id: new Date().getTime().toString(), digit: name };

      setList([...list, newItem]);
    }
    setName("");
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    localStorage.clear();
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "zip code removed");
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <Wrapper>
      <section className="section search">
        <form className="search-form">
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <div className="form-control">
            <label htmlFor="name" className="labell">
              Enter zip code for validation
            </label>
            <input
              type="number"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span type="submit" onClick={handleSubmit}>
              submit
            </span>
          </div>
        </form>
        {list.length > 0 && (
          <div className="section search">
            <div className="search-formmy">
              <h1>Validated</h1>
              {list.map((item) => {
                const { id, digit } = item;
                return (
                  <article key={id} className="zip-item">
                    <p className="title">Zip Code: {digit}</p>
                    <div className="btn-container">
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => removeItem(id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </article>
                );
              })}
              <h2>
                Do you want to search for state or city using the above zip
                codes.
                <span>
                  <Link to="/search">&nbsp; Click here</Link>
                </span>
              </h2>
            </div>
            <button className="clear btn btn-danger" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 3%;
  .section {
    padding: 4rem 0;
    height: 200px;
  }
  .search {
    margin-top: rem;
    padding-bottom: 0;
  }
  .form-control {
    border: none;
    background: transparent;
  }
  .search-form {
    width: 85vw;
    margin: 0 auto;
    max-width: 40rem;
    height: 250px;
    background: white;
    padding: 1.8rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  }

  .form-control label {
    display: block;
    margin-bottom: 0rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: #184866;
    font-family: "Rajdhani", sans-serif;
    padding: 1 0.3rem;
    margin-bottom: 2%;
    font-size: 1.3em;
    text-align: center;
    text-transform: capitalize;
  }
  .form-control input {
    width: 80%;
    border: none;
    border-color: transparent;
    background: #f1f5f8;
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  .form-control span {
    width: 20%;
    border: none;
    border-color: transparent;
    font-family: "Rajdhani", sans-serif;
    background: #184866;
    border-radius: 0.25rem;
    color: white;
    padding: 0.6rem 1em;
    font-size: 1.1rem;
    text-transform: capitalize;
    text-align: center;
  }

  .search-formmy {
    width: 85vw;
    margin: 0 auto;
    max-width: 40rem;
    height: auto;
    background: white;
    padding: 1.8rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);

    h2 {
      font-family: "Rajdhani", sans-serif;
      font-size: 1em;
      text-align: center;
      text-transform: capitalize;
      margin-top: 1em;
    }

    h1 {
      display: block;
      font-weight: bold;
      letter-spacing: 0.25rem;
      color: #184866;
      font-family: "Rajdhani", sans-serif;
      font-size: 1.3em;
      text-align: center;
      text-transform: capitalize;
      border-bottom: 1px solid gray;
    }
  }

  .zip-item {
    display: flex;
    justify-content: space-between;
  }

  .title {
    display: block;
    font-weight: 400;
    letter-spacing: 0.25rem;
    color: green;
    font-family: "Rajdhani", sans-serif;
    font-size: 1.1em;
    text-align: center;
    text-transform: capitalize;
  }

  .delete-btn {
    border: none;
    box-shadow: none;
    color: crimson;
    font-size: 1.1em;
  }
  .clear {
    display: grid;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 1rem;
    place-items: center;
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 5%;
    .section {
      height: auto;
      margin-bottom: 10%;
    }
  }

  @media screen and (max-width: 640px) {
    .search-form {
      height: 300px;
    }

    .form-control input {
      width: 100%;
      margin-bottom: 0.1em;
    }

    .form-control span {
      width: 40%;
    }
  }
  @media screen and (max-width: 370px) {
    .search-form {
      height: 330px;
    }

    .form-control span {
      width: 60%;
    }

    .title {
      font-size: 0.9em;
    }
    .delete-btn {
      font-size: 0.9em;
    }
  }

  @media screen and (max-width: 317px) {
    .search-form {
      height: 350px;
    }
  }
`;

export default Validate;
