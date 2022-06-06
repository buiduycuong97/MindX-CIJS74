import { useTodo } from "./todoContext";

const Form = () => {
  const { job, setJob, handleSubmit } = useTodo();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
  
        value={job}
        placeholder="Enter task ..."
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
