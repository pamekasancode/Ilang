import React, { useEffect } from "react";
import { Button, Card, Filter } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/actions/PostAction";
import { PostType } from "../../store/types/PostType";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { category, page, data, loading } = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  const onChangeCategory = (val) => {
    return (
      category !== val &&
      dispatch({ type: PostType.CHANGE_CATEGORY, payload: { category: val } })
    );
  };

  useEffect(() => {
    loading && dispatch(getData(category, page));
  }, [category, page]);

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Button
          onClick={() => navigate("/create")}
          type="button"
          variant="primary"
          text="Buat Postingan"
        />
        <Filter category={category} onChange={(val) => onChangeCategory(val)} />
      </div>
      <div className="py-6">
        {data.map((post, index) => (
          <Card
            key={index}
            name={post.name}
            date={post.date}
            announcement={post.announcement}
            image={post.image}
          />
        ))}
        { loading ? (
          <Button
            variant="secondary"
            text="Muat Lebih Banyak"
            width="full"
            onClick={() => dispatch({ type: PostType.SET_PAGE })}
          />
        ) : null}
      </div>
    </>
  );
};

export default Home;
