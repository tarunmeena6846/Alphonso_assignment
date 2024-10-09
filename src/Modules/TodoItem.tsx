export const TodoItem = ({ todo }) => {
  console.log(todo);
  return (
    <div className="flex items-center gap-2">
      {/* <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      /> */}
      <p className="text-sm leading-6 text-gray-900">{todo}</p>
    </div>
  );
};
