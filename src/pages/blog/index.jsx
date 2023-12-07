import "./index.css";
import { useLoaderData, Link, Outlet } from "react-router-dom";
export default function Index() {
  const posts = useLoaderData();

  return (
    <>
      <Outlet />

      <Link to={"create-post"}>
        <h3 className="addpost">Add Post</h3>
      </Link>
      <div className="post-container">
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="card">
              <img className="post-img" src={post.imageUrl} alt="" />
              <div className="card-body">
                <span className={`tag ${post.tagcolor}`}>{post.tag}</span>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.summary}</p>
              </div>
              <div className="card-footer">
                <div className="user">
                  <img src={post.authorImg} alt="" className="user__image" />
                  <div className="user__info">
                    <h5>Jane Doe</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

//tag-brown tag-red
