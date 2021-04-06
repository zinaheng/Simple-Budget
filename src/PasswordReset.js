import React, { useState, useContext } from "react";
import { auth } from "./firebase";
import { UserContext } from "./UserProvider";
import { Link } from "@reach/router";
import { Grid } from "@material-ui/core";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <Grid>
      <h1 className ="message">
                Simple Budget <br></br>
                <span className="motto">Helping Family, Friends to save Income</span>
               </h1> 
    <div className="m">
      
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <form className="ResetFrom" action="">
          <div className="resetContainer">
          <h1 >
        Reset your Password
      </h1>
          {emailHasBeenSent && (
            <div className="reset">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="w-full block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            className="mb-3 w-full px-1 py-2"
          />
          <br />{" "}
          <button
            className="w-full bg-blue-400 text-white py-3"
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
          <br />{" "}
          <Link
          to="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
          &larr; back to sign in page
        </Link>
        </div>
        </form>

        
      </div>
    </div>
    </Grid>
  );
};

export default PasswordReset;