import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { use, useEffect, useMemo, useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import Input from "./components/Input";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/usePost";
import axios from 'axios';
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./components/utils/page";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([
    {id: 2, title: 'Жбан', body: 'нужен для коричнегых томленых'},
    {id: 3, title: 'Ашеры', body: 'раскатывают отборное говнишко'}

  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sAndsPosts = usePosts(posts, filter.sort, filter.query)

  // let pagesArray = getPagesArray(totalPages);
  // console.log(pagesArray);


  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });
  // const sortedPosts = getSortedPosts();
  // const [title, setTitle] = useState('');
  // const [desc, setDesc] = useState('');
  const bodyInputRef = useRef();
  
  console.log(totalPages)
  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // async function fetchPosts() {
  //   setIsPostsLoading(true)
  //   setTimeout(async () => {
    // const posts = await PostService.getAll();
    // setPosts(posts);
  //     setIsPostsLoading(false)
  //   }, 1000)

  // }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }
 
  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
  //   console.log(sort);
  //   // setPosts()
  // }
  

  return (
    <div className="App">
      <button onClick={fetchPosts}>getp</button>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
      filter={filter} 
      setFilter={setFilter}
      />
      {postError &&
          <h1>Произошла ошибка{postError}</h1>
      }
      {isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader></Loader></div>
      : <PostList remove={removePost} posts={sAndsPosts} title={"список жбанов"}/>
      }
      <Pagination
       page={page} changePage={changePage} totalPages={totalPages}
      ></Pagination>

    </div>
  );
}
//yarn start / npm start / cd react-app




export default App;
