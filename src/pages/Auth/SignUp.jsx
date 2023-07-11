import React from "react";
import { TextInput, Button, ErrorMessage } from "../../components";

const SignUp = () => {
  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[400px]">
        <form method="postt">
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
            </div>
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="email"
                name="email"
                placeholder="Masukkan Email"
              />
            </div>
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="password"
                name="password"
                placeholder="Masukkan Password"
                />
            </div>
            <div>
              <TextInput
                onInput={(val) => handleInput(val)}
                type="number"
                name="phone"
                placeholder="Masukkan No Wa"
              />
            </div>
          </div>
          <div className="space-y-6 pt-6">
            <Button text="Daftar" variant="primary" width="full" />
            <p className="text-center text-sm">Sudah Mempunyai Akun?</p>
            <Button
              onClick={() => navigate("/login")}
              text="Masuk"
              variant="secondary"
              width="full"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
