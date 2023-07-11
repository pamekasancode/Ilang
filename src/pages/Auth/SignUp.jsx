import React, { useEffect, useState } from "react";
import { TextInput, Button, ErrorMessage } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SingnUp } from "../../store/actions/AuthAction";
import { AuthType } from "../../store/types/AuthType";

const SignUp = () => {
  const navigate = useNavigate();
  const currentState = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SingnUp(form));
  };

  useEffect(() => {
    dispatch({type: AuthType.BEFORE_STATE});
    currentState.isRegistered && navigate("/login");
  }, [currentState.isRegistered]);

  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[400px]">
        <form onSubmit={handleSubmit} method="post">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold">Daftar</h1>
          </div>
          <div className="space-y-4">
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="text"
                name="name"
                placeholder="Masukkan Nama"
              />
              {currentState.errorRegister ? (
                <ErrorMessage message={currentState.errorRegister.name} />
              ) : null}
            </div>
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="email"
                name="email"
                placeholder="Masukkan Email"
              />
              {currentState.errorRegister ? (
                <ErrorMessage message={currentState.errorRegister.email} />
              ) : null}
            </div>
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="password"
                name="password"
                placeholder="Masukkan Password"
              />
              {currentState.errorRegister ? (
                <ErrorMessage message={currentState.errorRegister.password} />
              ) : null}
            </div>
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="number"
                name="phone"
                placeholder="Masukkan No Wa"
              />
              {currentState.errorRegister ? (
                <ErrorMessage message={currentState.errorRegister.phone} />
              ) : null}
            </div>
            <Button text="Daftar" variant="primary" width="full" />
          </div>
        </form>
        <div className="space-y-6 pt-6">
          <p className="text-center text-sm">Sudah Mempunyai Akun?</p>
          <Button
            onClick={() => navigate("/login")}
            text="Masuk"
            variant="secondary"
            width="full"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
