const MonthNavigator = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="p-2 bg-gray-200 rounded">Previous</button>
      <span className="text-lg font-semibold">March 2023</span>
      <button className="p-2 bg-gray-200 rounded">Next</button>
    </div>
  );
};
export default MonthNavigator;
