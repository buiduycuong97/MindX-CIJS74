import { useTodo } from "./todoContext";

const Header = () => {
  const { jobs, handleFilter, language, changeLanguage } = useTodo();
  return (
    <div className="header">
      {language[changeLanguage].task}{" "}
      {(jobs.length > 0 &&
        jobs.filter((item) => item.finished === false).length) ||
        "0"}
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            handleFilter(e.target.checked);
            console.log(e.target.checked);
          }}
        />
        {language[changeLanguage].unfinished}
      </div>
    </div>
  );
};

export default Header;
