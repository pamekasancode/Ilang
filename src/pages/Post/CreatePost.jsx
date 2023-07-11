import React, { useEffect, useState } from "react";
import { Button, ErrorMessage, Navbar, NoteBoard, Select, TextArea } from "../../components";
import { container } from "../../utils/Style";
import { useDispatch, useSelector } from "react-redux";
import { createPostData } from "../../store/actions/PostAction";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../store/types/PostType";

const CreatePost = () => {
  const navigate = useNavigate();
  const { isCreated, createError } = useSelector((state) => state.Post);
  const dispatch = useDispatch();
  const { token } = useAuthContext();

  const [form, setForm] = useState({
    category_id: 1,
    announcement: "",
  });

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    form.category_id = parseInt(form.category_id);
    let category = ["lost", "found"][form.category_id - 1];
    dispatch(createPostData(form, token));
    dispatch({ type: PostType.CHANGE_CATEGORY, payload: { category: category } })
  };

  useEffect(() => {
    isCreated && navigate("/");
  },[isCreated]);

  return (
    <>
      <Navbar />
      <div
        className={`${container} py-[20px] flex justify-between gap-x-[50px]`}
      >
        <div className="w-[40%]">
          <NoteBoard />
        </div>
        <div className="w-[60%]">
          <form onSubmit={handleSubmit} method="post" className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm">Kategori</label>
              <Select name="category_id" onInput={(val) => handleInput(val)} />
              { createError ? <ErrorMessage message={createError.category_id}/> : null}
            </div>
            <div className="space-y-2">
              <label className="text-sm">Pengumuman</label>
              <TextArea
                name="announcement"
                onInput={(val) => handleInput(val)}
                />
              { createError ? <ErrorMessage message={createError.announcement}/> : null}
            </div>
            <Button text="Simpan" variant="primary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
