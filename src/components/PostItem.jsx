import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom';

    // console.log(props.post.id);
const PostItem = ({ post, remove, number }) => {

  const router = useNavigate();
  console.log(router)

  // console.log("ref.current", ref?.current); // <-- временный лог

  return (
    <div className="post"> {/* важный момент — ref на .post */}
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
