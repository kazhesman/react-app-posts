import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body:''});
    
    const addNewPost = (e) => {
      e.preventDefault()
      // console.log(title)
      // console.log(desc)
      // console.log(bodyInputRef.current.value);
      // const newPost = {
      //   id: Date.now(),
      //   body: desc,
      //   title
        
      // }
      // setPosts([...posts, newPost]);
      // setPosts([...posts, {...post, id: Date.now()}]);
      // setTitle('')
      // setDesc('')
      const newPost = {
        ...post, id: Date.now()
      }
      create(newPost);
      setPost({title: '', body:''});
      console.log(newPost);
  
    }
  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="name"
        ></MyInput>
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          // ref={bodyInputRef}
          type="text"
          placeholder="desc"
        ></MyInput>
        <MyButton onClick={addNewPost}>Create new</MyButton>
        {/* {disabled} */}
      </form>
    </div>
  );
};

export default PostForm;
