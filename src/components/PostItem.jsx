import React from "react";
import MyButton from "./UI/button/MyButton";

    // console.log(props.post.id);
const PostItem = ({ post, remove, number }) => {

  // console.log("ref.current", ref?.current); // <-- временный лог

  return (
    <div className="post"> {/* важный момент — ref на .post */}
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
