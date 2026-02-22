const SkeletonLoader = () => {
  const array = new Array(20).fill("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
      {array.map((item, key) => (
        <div key={key} className="animate-pulse">
          {/* Thumbnail */}
          <div className="w-full aspect-video bg-gray-700 rounded-xl mb-3"></div>

          {/* Alt kısım */}
          <div className="flex gap-3">
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gray-700"></div>

            {/* Yazılar */}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              <div className="h-3 bg-gray-700 rounded w-2/5"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
