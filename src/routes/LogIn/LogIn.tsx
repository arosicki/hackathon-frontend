import { ChangeEvent, useState, FormEvent, useReducer } from "react";
import { defaultStyle } from "src/styles";
import styled from "styled-components";
import postRegister from "./postRegister.api";

const formReducer = (state: FormData, event: ChangeEvent<HTMLInputElement>) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const BareLogIn = ({ className }: LogInProps) => {
  const [form, setForm] = useReducer(formReducer, {
    username: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState<string>("");
  const [cryptoAdress, setCryptoAdress] = useState<string>(" ");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    if (!form.username.match(/^[\w\d]{5,26}$/)) {
      setError("Username does not meet requirements. It has to be 5 to 26 characters long.");
      return;
    }
    if (!isValid(form.password)) {
      setError(
        "Password does not meet requirements. It has to be 8 to 32 characters long, contain uppercase, lowercase letter and number"
      );
      return;
    }

    if (form.password !== form.repeatPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const data = await postRegister(form.username, form.password);
      if (!data) {
        setError("Username is already taken.");
      }
      setCryptoAdress(data.cryptoAddress);
      setError("");
    } catch (e) {
      setError("Can't connect to the server.");
      return;
    }
  };

  const isValid = (password: string) => password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d#$@!%&*?]{8,32}$/g);

  return (
    <>
      <div className={className}>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>

          <div>
            <label>Username</label>
            <input type="text" name="username" value={form.username} onChange={setForm} placeholder="Username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={setForm} placeholder="Password" />
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeatPassword"
              value={form.repeatPassword}
              onChange={setForm}
              placeholder="Repeat Password"
            />
          </div>
          <input type="submit" value="Register" />
          <p id="error">{error ?? "Your crypto address: " + cryptoAdress}</p>
        </form>
      </div>
    </>
  );
};

const LogIn = styled(BareLogIn)`
  background-color: ${defaultStyle.HOME_FIRST_COLOR};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 1.75rem;

  form {
    h1 {
      text-align: center;
    }
    min-width: 400px;
    width: 600px;
    max-width: 70%;
    position: relative;
    input[type="submit"] {
      width: 100%;
      background-color: #85abf2;
      border: 1px #77a1ee solid;
      padding: 10px 10px;
      height: 50px;
      color: #eee;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.5rem;
      margin: 0.5rem 0 1rem;
      border-radius: 20px;
      &:hover {
        background-color: #578df0;
      }
    }
    #error {
      position: absolute;
      font-weight: bold;
      color: red;
      text-align: center;
    }
    div {
      display: flex;
      flex-direction: column;
      label {
        text-align: center;
        font-size: 2rem;
      }
      input[type="text"],
      input[type="password"] {
        text-align: center;
        background-color: transparent;
        border-radius: 20px;
        border: 1px #777 dashed;
        padding: 5px 10px;
        height: 40px;
        font-size: 1.5rem;
        margin: 0.5rem 0 1rem;
      }
    }
  }
`;

interface LogInProps {
  className?: string;
}

interface FormData {
  username: string;
  password: string;
  repeatPassword: string;
}

export default LogIn;
