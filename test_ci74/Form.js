import { useTodo } from "./todoContext";

const Form = () => {
  const { job, setJob, handleSubmit, language, changeLanguage, reset } =
    useTodo();

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          if (job !== "") handleSubmit(e);
          e.preventDefault();
        }}
      >
        <input
          value={job}
          placeholder="Enter task ..."
          onChange={(e) => {
            setJob(e.target.value);
          }}
        />
        <button type="submit">{language[changeLanguage].submit}</button>
        <button type="reset" onClick={reset}>
          {language[changeLanguage].reset}
        </button>
      </form>
    </div>
  );
};

export default Form;
