
const Person = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col justify-between items-center space-y-4">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-semibold text-gray-800">Baibhab Sahu</h2>
        <p className="text-gray-600 text-sm">From: Berhampur, Odisha</p>
        <p className="text-gray-500 text-sm">Passionate React Developer 🚀</p>
      </div>

      <div className="w-32 h-32 mt-4">
        <img
  src={process.env.PUBLIC_URL + '/myPhoto.jpg'}  // "/" se start hota hai public folder ke liye
  alt="Baibhab"
  className="w-full h-full object-cover rounded-full border-4 border-orange-400 shadow-md"
/>
      </div>
    </div>
  );
};

export default Person;
