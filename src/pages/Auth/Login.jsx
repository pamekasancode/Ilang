import React, { useEffect, useState } from "react";
import { TextInput, Button, Alert } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { SignIn } from "../../store/actions/AuthAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const currentState = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleInput = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(SignIn(form));
  }
  
  useEffect(() => {
    currentState.isAuthenticated && navigate("/"); 
  }, [currentState])


  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[400px]">
        <form onSubmit={handleSubmit} method="post">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold">Masuk</h1>
          </div>
          <div className="space-y-4">
          { currentState.loginMessage ? <Alert message="Username / Password Salah!"/> : null}
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="text"
                name="email"
                placeholder="Masukkan Email"
                required="required"
              />
            </div>
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="password"
                name="password"
                placeholder="Masukkan Password"
                required="required"
              />
            </div>
            <Button text="Masuk" variant="primary" width="full" />
          </div>
        </form>
        <div className="space-y-6 pt-6">
          <p className="text-center text-sm">Tidak Mempunyai Akun?</p>
          <Button
            onClick={() => navigate("/register")}
            text="Daftar"
            variant="secondary"
            width="full"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
