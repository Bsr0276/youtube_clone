import millify from "millify";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  if (!video) return null;

  const thumbnail =
    video?.channelThumbnail?.[0]?.url ||
    "https://via.placeholder.com/48x48.png?text=YT";

  const likeCount = millify(video?.likeCount || 0);

  return (
    <div className="flex justify-between max-sm:flex-col sm:items-center">
      {/* Sol */}
      <div className="flex items-center gap-4">
        <img
          src={thumbnail}
          alt={video?.channelTitle}
          className="rounded-full size-10 sm:size-12 object-cover"
        />

        <div>
          <h4 className="font-bold">{video?.channelTitle}</h4>
          <p className="text-gray-400 text-sm">
            {video?.subscriberCountText || ""}
          </p>
        </div>
      </div>

      {/* Sağ */}
      <div className="flex items-center bg-[#272727] cursor-pointer mt-3 sm:mt-0 rounded-full">
        <div className="flex py-1 px-4 items-center gap-2 font-bold border-r border-gray-500">
          <AiFillLike />
          <span className="text-sm font-medium">{likeCount}</span>
        </div>

        <div className="py-1 px-4">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
