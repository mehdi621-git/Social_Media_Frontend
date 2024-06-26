import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostContextAccessible } from "./context-app";
import { RiHashtag } from "react-icons/ri";

const Post = ({ post }) => {
  const { deleteitem } = useContext(PostContextAccessible);
  return (
    <>
      <div className="card text-center post-width-c ">
        <div className="card-header">
          {post.name && `From ${post.name}`}
          <span
            class="position-absolute badge top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
            onClick={() => deleteitem(post.id)}
          >
            <TiDelete color="black" size="14px" className="hovereffect" />
          </span>
        </div>
        <div className="card-body card border-success ">
          <h5 className="card-title">{post.title}</h5>
          <p>{post.body}</p>
        </div>
        {post.tags.length === " " ? "" :
          <div className="hashtagsstyle">
           
            <span className="hashtagicon">
              
              <RiHashtag color="blue" />
            </span>
            {post.tags.map((tag) => (
              <button type="text" class="btn btn-primary tagstyle">
                {tag}
              </button>
            ))}
         
          </div>
        }
        <div className="card-footer text-body-secondary">{post.email}</div>
      </div>
    </>
  );
};
export default Post;
