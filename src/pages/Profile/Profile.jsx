import React, { useEffect } from "react";
import { Navbar, UserProfile, Button, Card } from "../../components";
import { container } from "../../utils/Style";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataProfile,
  getPostProfile,
} from "../../store/actions/ProfileAction";
import { ProfileType } from "../../store/types/ProfileType";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  const id = params.id;
  const { profile, page, posts, loading } = useSelector(
    (state) => state.Profile
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataProfile(id));
  }, [id]);

  useEffect(() => {
    dispatch(getPostProfile(id, page));
  }, [id, page]);

  return (
    <>
      <Navbar />
      <div className={`${container} py-[20px] w-full flex gap-x-[50px]`}>
        <div className="w-[35%]">
          <UserProfile
            name={profile.name}
            bio={profile.bio}
            image={profile.image}
          />
        </div>
        <div className="w-[65%]">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              {profile.total_post} Postingan
            </h2>
          </div>
          <div className="py-6">
            {posts.map((post, index) => (
              <Card
                key={index}
                name={post.name}
                date={post.date}
                announcement={post.announcement}
                image={post.image}
              />
            ))}
          </div>
          {loading ? (
            <Button
              variant="secondary"
              text="Muat Lebih Banyak"
              width="full"
              onClick={() => dispatch({ type: ProfileType.SET_PAGE })}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Profile;
