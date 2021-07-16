import React from 'react'

const PostCategoryList = ({ posts }) => {
  const { body } = posts.data;
  return (
    <>
      {
        posts.map((post, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-header">Date created: { post.data.created_at }</div>
              <div className="card-body">
                <h4>{ post.data.title }</h4>
                <p>{ body.blocks[0].text }</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default PostCategoryList
