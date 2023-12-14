import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.css";
export default function Index() {
  const { blogId } = useParams();
  console.log("delte id", blogId);
  const navigate = useNavigate();

  const notify = () => toast.error("Successfully deleted");

  const handleDelete = async (e, blogId) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3000/posts/${blogId}`;
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      notify();
      // const res = await response.json();
      console.log("Successfully deleted:");
      navigate("/blog");

      // return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="modal ">
          <div className="modal-confirm">
            <div className="modal-content">
              <div className="modal-header flex-column">
                <div className="icon-box">
                  <i className="material-icons">&#xE5CD;</i>
                </div>
                <h4 className="modal-title ">Are you sure?</h4>
                <button
                  type="button"
                  className="close"
                  onClick={() => navigate(-1)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Do you really want to delete these records? This process
                  cannot be undone.
                </p>
              </div>
              <div className="modal-footer ">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(e, blogId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
