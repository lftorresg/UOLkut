import classes from "./EditInfos.module.css";

const EditInfos = () => {
  return (
    <section className={classes.container}>
      <section className={classes.editText}>
        <h1>Editar informações</h1>
      </section>
      <div className={classes.wrap}>
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
              <option>Casado</option>
              <option>Divorciado</option>
              <option>Namorando</option>
              <option>Preocupado</option>
            </select>
          </section>
        </section>
      </div>
      <section className={classes.field}>
        <a href="/profile">Salvar</a>
      </section>
    </section>
  );
};

export default EditInfos;
