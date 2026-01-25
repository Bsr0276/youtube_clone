import { SiYoutubeshorts } from "react-icons/si";

const Shorts = ({ shortList }) => {
  return (
    <div>
      <div className="flex items-center gap-2 text-xl">
        <SiYoutubeshorts className="text-red-500" />

        <h1>
          <img src="" alt="" />
          Shorts
        </h1>
        <div className="flex gap-10">
          {shortList.data.map((shorts) => (
            <div>Shorts</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shorts;
