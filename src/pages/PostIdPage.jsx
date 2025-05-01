import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comms, setComms] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
    console.log(response);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommsByPostId(id);
    setComms(response.data);
    console.log(response);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>Вы попали на страницу поста {params.id}</h1>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments:</h1>
      {isComLoading ? <Loader></Loader> :
       <div>
        {comms.map(comm =>
            <div key={comm.id} style={{marginTop: 15}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
            </div>
        )}
        </div>}
    </div>
  );
};

export default PostIdPage;
