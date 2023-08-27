import classes from "./EditInfos.module.css";

const EditInfos = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const inputDate = document.querySelector(".dateInput") as HTMLInputElement;

    inputDate.addEventListener("input", function () {
      const inputValue = inputDate.value.replace(/\D/g, "");
      const formattedValue = inputValue
        .replace(/^(\d{2})(\d)/, "$1/$2")
        .replace(/^(\d{2}\/\d{2})(\d{0,4})/, "$1/$2");

      inputDate.value = formattedValue;
    });
  });

  return (
    <section className={classes.container}>
      <section className={classes.editText}>
        <h1>Editar informações</h1>
      </section>
      <section className={classes.column}>
        <section className={classes.field}>
          <input
            type="text"
            placeholder="Profissão"
            className={classes.input}
          />
        </section>
        <section className={classes.field}>
          <input type="text" placeholder="Nome" className={classes.input} />
        </section>
        <section className={classes.field}>
          <input type="text" placeholder="Cidade" className={classes.input} />
        </section>
        <section className={classes.field}>
          <input type="text" placeholder="País" className={classes.input} />
        </section>
        <section className={classes.field}>
          <input
            type="date"
            placeholder="DD/MM/AAAA"
            className={classes.input}
          />
        </section>
        <section className={classes.field}>
          <input
            type="password"
            placeholder="Senha"
            className={classes.input}
          />
        </section>
        <section className={classes.field}>
          <input
            type="password"
            placeholder="Repetir senha"
            className={classes.input}
          />
        </section>
      </section>
      <section className={classes.column}>
        <section className={classes.selectField}>
          <select className={classes.select}>
            <option disabled selected>
              Relacionamento
            </option>
            <option>Solteiro(a)</option>
            <option>Em um relacionamento sério</option>
            <option>Noivo(a)</option>
            <option>Casado(a)</option>
          </select>
        </section>
      </section>
      <section className={classes.field}>
        <a href="/">Salvar</a>
      </section>
    </section>
  );
};

export default EditInfos;
