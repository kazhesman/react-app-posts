import React, { useState, createRef, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import PostItem from "./PostItem";
import { TransitionGroup} from 'react-transition-group';
import {CSSTransition} from 'react-transition-group';



const PostList = ({ posts, title, remove }) => {
  const nodeRefs = useRef(new Map());

  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          const ref = nodeRefs.current.get(post.id) || React.createRef();
          nodeRefs.current.set(post.id, ref);

          return (
            <CSSTransition
              key={post.id}
              timeout={1500}
              classNames="post"
              nodeRef={ref}
            >
              <div ref={ref}>
              <PostItem
                remove={remove}
                number={index + 1}
                post={post}
              />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;


//        {/* <PostItem value={"222"} item={{title: 0}} number = {1}/> */}