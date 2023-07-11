import React from "react";
import { Button, Card, Filter } from "../../components";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Button
          onClick={() => navigate("/create")}
          type="button"
          variant="primary"
          text="Buat Postingan"
        />
        <Filter />
      </div>
      <div className="py-6">
        <Card/>
      </div>
    </>
  );
};

export default Home;
