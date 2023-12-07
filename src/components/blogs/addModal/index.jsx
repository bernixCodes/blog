import "./index.css";

export default function Index() {
  return (
    <>
      <div className="wrapper">
        <div className="modal">
          <h1>Add Post</h1>

          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                name="title"
                required="required"
              />
            </div>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <textarea placeholder="Post Summary"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="content">Post Content</label>
              <textarea placeholder="Post Content" rows={15}></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Add Post</button>
            </div>
          </form>
          <a href="/blog" className="modal__close">
            &times;
          </a>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
