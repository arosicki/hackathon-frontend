import { ChangeEvent, useState, FormEvent, useReducer } from "react";
import { defaultStyle } from "src/styles";
import styled from "styled-components";
import postLogin from "./postLogin.api";

const formReducer = (state: Omit<FormData, "repeatPassword">, event: ChangeEvent<HTMLInputElement>) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const BareRegister = ({ className }: LogInProps) => {
  const [form, setForm] = useReducer(formReducer, {
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>(" ");
  const [cryptoAdress, setCryptoAdress] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.username.match(/^[\w\d]{5,26}$/)) {
      return;
    }
    if (!isValid(form.password)) {
      return;
    }
    setError("");

    try {
      const data = await postLogin(form.username, form.password);
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
          <h1>Log In</h1>

          <div>
            <label>Username</label>
            <input type="text" name="username" value={form.username} onChange={setForm} placeholder="Username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={setForm} placeholder="Password" />
          </div>
          <input type="submit" value="Login" />
          <p id="error">{error === "" ? "Your crypto address: " + cryptoAdress : error}</p>
        </form>
      </div>
    </>
  );
};

const Register = styled(BareRegister)`
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

export default Register;
