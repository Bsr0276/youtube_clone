import { useEffect, useState } from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../components/loader/skeleton-loader";
import Error from "../../components/error";
import Shorts from "../../components/shorts";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";

const Feed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    setLoading(true);
    setError(null);

    const url =
      !selectedCategory || selectedCategory === "home"
        ? "/trending"
        : `/search?query=${selectedCategory}`;

    api
      .get(url)
      .then((res) => {
        setData(res?.data?.data || []);
      })
      .catch(() => {
        setError("Veriler alınamadı");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  const shorts = data.filter((item) => item.type === "shorts_listing");
  const videos = data.filter((item) => item.type === "video");

  if (loading) return <SkeletonLoader />;
  if (error) return <Error message={error} />;

  return (
    <div className="page">
      {/* ÜST SHORTS */}
      {shorts.length > 0 && <Shorts shortList={shorts[0]} />}

      {/* VIDEOLAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6">
        {videos.map((item) => (
          <Card key={item.videoId} video={item} />
        ))}
      </div>

      {/* ALT SHORTS */}
      {shorts.length > 1 && <Shorts shortList={shorts[1]} />}
    </div>
  );
};

export default Feed;
