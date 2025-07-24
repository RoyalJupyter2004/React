const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-300 h-60 rounded-xl shadow-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
