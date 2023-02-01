const NoteSkeleton = () => {
  return (
    <div className="w-72 h-min flex flex-col justify-between bg-yellow-200 rounded-lg border border-yellow-200 mb-6 py-5 px-4">
      <div className="flex flex-col gap-3">
        <div className=" w-1/2 h-5 mb-3 bg-yellow-400 rounded animate-pulse"></div>
        <div className=" w-3/4 h-4 bg-yellow-400 rounded animate-pulse"></div>
        <div className="w-full h-4 bg-yellow-400  rounded animate-pulse"></div>
        <div className="w-5/6 h-4 bg-yellow-400  rounded animate-pulse"></div>
        <div className="w-2/6 h-4 bg-yellow-400 mt-2  rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default NoteSkeleton;
