import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sample from "../compoment/Sample/Sample";
import { getPost, getUser } from "../modules/samples";

function SampleContainer() {
  const { post, user, loadingPost, loadingUser } = useSelector(
    ({ sample }) => ({
      post: sample.post,
      user: sample.user,
      loadingPost: sample.loading.GET_POST,
      loadingUser: sample.loading.GET_USER,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUser(1));
  }, [dispatch]);

  return (
    <Sample
      post={post}
      user={user}
      loadingPost={loadingPost}
      loadingUser={loadingUser}
    />
  );
}

export default SampleContainer;
