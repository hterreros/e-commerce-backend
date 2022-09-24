import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";

const initForm = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
  const { auth, login } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    await login(form);
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title titulo="Login" />
      <section className="row">
        <article className="col">
          <p>{auth.id}</p>
        </article>
      </section>
      <main className="row">
        <article className="col">
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                onChange={cambio}
                value={form.username}
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                onChange={cambio}
                value={form.password}
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesion
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default LoginPage;
