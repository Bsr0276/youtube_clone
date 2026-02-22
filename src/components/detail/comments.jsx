import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../loader/spinner";

const Comments = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    api
      .get("/comments", { params: { id } })
      .then((res) => {
        setComments(res.data.data || res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner desings="my-20" />;

  return (
    <div className="mt-6 flex flex-col gap-6">
      {comments.map((comment) => (
        <div key={comment.commentId} className="flex gap-3">
          {/* Avatar */}
          <img
            src={comment.authorThumbnail?.[0]?.url}
            alt={comment.authorText}
            className="rounded-full size-10 object-cover"
          />
          {/* İçerik */}
          <div>
            <h4 className="font-semibold text-sm">{comment.authorText}</h4>

            <p className="text-sm text-gray-300"></p>

            <span className="text-xs text-gray-400">{comment.likeCount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
