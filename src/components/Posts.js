import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <div className=''>
      <div className="container py-4">
    <div className="row">
{posts.map(post => (
    <div className='col-md-3 mb-3'>
    <div className="card">
        <div className='card-body'>
    
        <p key={post.id} className='list-group-item card card-list'>
          {post.id}- {post.email}- {post.body}
        </p>
        </div>
        </div>
      </div>
      ))}

      </div>
    </div>
    </div>
  );
};

export default Posts;
