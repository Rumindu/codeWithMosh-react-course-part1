import { FieldValues, useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState } = useForm();
  console.log("formState.errors", formState.errors);
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {formState.errors.name?.type === "required" && <p>Name is required.</p>}
        {formState.errors.name?.type === "minLength" && (
          <p>Name must be at least 3 characters long.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
