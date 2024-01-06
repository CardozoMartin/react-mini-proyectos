import { useState } from "react";


const AddCategoty = ( { setCategory }) => {
   
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);


  const searchGif = e => {
    e.preventDefault();
    if (value === "") {
        setError(true);
        return;
    }
    setError(false);
    setCategory(value);
    setValue("");
}
return ( 
  <>
  <section className="container">

      <form onSubmit={ searchGif }>
          <input type="text" placeholder='Search...' 
              onChange={e => setValue(e.target.value)}
              value={value}
              className="form-control form-control-user"
              />
      </form>
      { error ? <p className='text-center alert alert-danger mt-3'>El campo no puede estar vacio...</p> : ""}
              </section>
  </>
);
}

export default AddCategoty;