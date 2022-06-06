import { useTodo } from "./todoContext";

const Header = () => {
  const { jobs, handleFilter } = useTodo();
  return (
    <div className="header">
      You have {jobs.filter((item) => item.finished === false).length} tasks
      left!
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            handleFilter(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        Unfinished
      </div>
    </div>
  );
};

export default Header;
