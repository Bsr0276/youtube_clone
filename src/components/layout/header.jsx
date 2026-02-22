import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MdMenu, MdMic, MdApps } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useSidebar } from "../../context/SidebarContext";

const Header = () => {
  // urldeki search_query parametresini al
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // imputtaki yazıya eriş
    const text = e.target[0].value.trim();

    //eğer yazı içeriği varsa search sayfasına yönlendir

    if (text) {
      navigate(`results?search_query=${text}`);
    }
  };

  return (
    <header className="flex justify-between gap-4 px-4 py-0 h-14 sticky top-0 backdrop-blur-2xl">
      {/* Sol-Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-grey rounded-full transition duration-200"
        >
          <MdMenu className="text-xl md:text-2xl" />
        </button>

        <Link to="/" className="flex items-center gap-1">
          <img src="youtube.png" alt="logo" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-md:hidden">
            YouTube
          </span>
        </Link>
      </div>

      {/* Orta-Arama */}

      <div className="flex-1 max-w-[728px] max-4 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[640] items-center"
        >
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Ara"
              className="w-full h-10 px-4 bg-[#121212] border border-grey rounded-l-full text-white placeholder-[#aaaaaa] focus:border-[#1b62b9] outline-none text-base"
              defaultValue={query} // sayfa yenilenince kaybolmuyor
            />
            <button className="w-16 h-10 bg-[#222222] border border-l-0 border-grey rounded-r-full flex justify-center items-center hover:bg-grey transition">
              <CiSearch className="text-xl" />
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-grey rounded-full transition hidden sm:flex items-center justify">
            <MdMic />
          </button>
        </form>
      </div>

      {/* Sağ-İconlar */}

      <div className="flex items-center gap-2">
        <button className="icon hidden sm:flex items-center justify">
          <IoIosVideocam className="text-xl" />
        </button>
        <button className="icon  hidden sm:flex items-center justify">
          <MdApps className="text-xl" />
        </button>
        <button className="icon relative">
          <FaBell className="text-xl" />
          <span className="absolute -top-2 -right-1 bg-red-600 text-xs rounded-full size-5 flex items-center justify-center font-bold ">
            3
          </span>
        </button>

        <button className="icon ml-2">
          <RiAccountCircleLine className="text-2xl text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
