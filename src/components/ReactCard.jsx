function ReactCard() {
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-slate-900 rounded-2xl text-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        React with Tailwind CSS
      </h1>

      <p className="text-gray-300 leading-7 mb-6">
        React is a JavaScript library used to build interactive and reusable
        user interfaces.
      </p>

      <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-semibold">
        Learn React
      </button>
    </div>
  );
}

export default ReactCard;
