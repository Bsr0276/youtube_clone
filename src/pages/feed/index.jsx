import { useState, useEffect } from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../components/loader/skeleton-loader";
import Error from "../../components/error";
import Shorts from "../../components/shorts";
import Card from "../../components/card";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api
      .get("/trending")
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="h-[calc(100vh-56px)] overflow-y-auto  w-full flex-1">
      <div>
        {loading ? (
          <SkeletonLoader />
        ) : error ? (
          <Error />
        ) : (
          <div>
            {videos.map((item, key) =>
              item.type === "shorts_listing" ? (
                <Shorts shortList={item} key={key} />
              ) : item.tyep === "video" ? (
                <Card video={item} key={key} />
              ) : null,
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
