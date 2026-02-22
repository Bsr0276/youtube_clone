import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
import millify from "millify";
import { useState } from "react";

// relativeTime plugini
dayjs.extend(relativeTime);

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#272727] mt-4 p-2 cursor-pointer hover:opacity-80 transition rounded-md"
    >
      <div className="flex gap-4 mb-2 font-semibold">
        <p>{millify(video.viewCount)} görüntülenme</p>

        <p>{dayjs(video.publishDate).locale("tr").fromNow()}</p>
      </div>

      {/* pre-wrap satır sonlarına göre texti yazdırır */}
      <p className={`whitespace-pre-wrap`}>
        {isOpen
          ? video.description
          : video.description.slice(0, 100) + " ...daha fazla"}
      </p>
    </div>
  );
};

export default Description;
