import { useState } from "react";

import classes from "./SignUp.module.css";

import orkut from "../../assets/ps_orkut.svg";

const SignUpPg = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    birthdate: "",
    job: "",
    country: "",
    city: "",
    relationship: "",
  });

  const [errors, setErrors] = useState({
    invalidEmail: false,
    invalidPassword: false,
    invalidName: false,
    invalidBirthdate: false,
    invalidJob: false,
    invalidCountry: false,
    invalidCity: false,
    invalidRelationShip: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id, type } = event.target;
    const fieldValue = value;

    if (type === "email") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidEmail: false,
      }));
    }

    if (id === "name") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidName: false,
      }));
    }

    if (id === "password") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidPassword: false,
      }));
    }

    if (id === "birthdate") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidBirthdate: false,
      }));
    }

    if (id === "job") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidJob: false,
      }));
    }

    if (id === "country") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidCountry: false,
      }));
    }

    if (id === "city") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidCity: false,
      }));
    }

    if (id === "relationship") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidRelationship: false,
      }));
    }

    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.name.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidName: true,
      }));
    } else if (form.email.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidEmail: true,
      }));
    } else if (form.city.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidCity: true,
      }));
    } else if (form.password.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidPassword: true,
      }));
    } else if (form.relationship.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidPassword: true,
      }));
    } else if (form.country.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidPassword: true,
      }));
    } else if (form.job.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidPassword: true,
      }));
    } else if (form.birthdate.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidPassword: true,
      }));
    }
  };

  return (
    <>
      <div className={classes["container-form"]}>
        <div className={classes["brand-form"]}>
          <img src={orkut} className={classes["img-orkut"]} alt="Brand Orkut" />
          <h3 className={classes.title}>Cadastre-se no UOLkut</h3>
        </div>

        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <input
              name="email"
              id="email"
              onChange={handleChange}
              className={
                errors.invalidEmail ? classes["invalid-input"] : classes.input
              }
              type="email"
              placeholder="E-mail"
              value={form.email}
            />
            {errors.invalidEmail && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <div>
            <input
              name="password"
              id="password"
              onChange={handleChange}
              className={
                errors.invalidPassword
                  ? classes["invalid-input"]
                  : classes.input
              }
              type="password"
              placeholder="Senha"
              value={form.password}
            />
            {errors.invalidPassword && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <div>
            <input
              name="name"
              id="name"
              onChange={handleChange}
              className={
                errors.invalidName ? classes["invalid-input"] : classes.input
              }
              type="text"
              placeholder="Nome"
              value={form.name}
            />
            {errors.invalidName && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <section className={classes.grid}>
            <div className={classes.div1}>
              <input
                name="birthdate"
                id="birthdate"
                onChange={handleChange}
                className={
                  errors.invalidBirthdate
                    ? classes["invalid-input"]
                    : classes.input
                }
                type="text"
                placeholder="Nascimento"
                value={form.birthdate}
              />
              {errors.invalidBirthdate && (
                <p className={classes.errors}>Campo não pode ser vazio</p>
              )}
              <p className={classes.birthHelp}>DD/MM/AAAA</p>
            </div>

            <div className={classes.div2}>
              <input
                name="job"
                id="job"
                onChange={handleChange}
                className={
                  errors.invalidJob ? classes["invalid-input"] : classes.input
                }
                type="text"
                placeholder="Profissão"
                value={form.job}
              />
              {errors.invalidJob && (
                <p className={classes.errors}>Campo não pode ser vazio</p>
              )}
            </div>

            <div className={classes.div3}>
              <input
                name="country"
                id="country"
                onChange={handleChange}
                className={
                  errors.invalidCountry
                    ? classes["invalid-input"]
                    : classes.input
                }
                type="text"
                placeholder="País"
                value={form.country}
              />
              {errors.invalidCountry && (
                <p className={classes.errors}>Campo não pode ser vazio</p>
              )}
            </div>

            <div className={classes.div4}>
              <input
                name="city"
                id="city"
                onChange={handleChange}
                className={
                  errors.invalidCity ? classes["invalid-input"] : classes.input
                }
                type="text"
                placeholder="Cidade"
                value={form.city}
              />
              {errors.invalidCity && (
                <p className={classes.errors}>Campo não pode ser vazio</p>
              )}
            </div>

            <section className={classes.div5}>
              <select
                className={
                  errors.invalidRelationShip
                    ? classes["invalid-input"]
                    : classes.select
                }
              >
                <option disabled selected>
                  Relacionamento
                </option>
                <option>Solteiro(a)</option>
                <option>Casado</option>
                <option>Divorciado</option>
                <option>Namorando</option>
                <option>Preocupado</option>
              </select>
            </section>
          </section>

          <div className={classes["flex-button"]}>
            <button type="submit">Criar conta</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPg;
