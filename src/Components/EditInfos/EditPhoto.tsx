import classes from "./EditPhoto.module.css";
import gabriel from "../../assets/gabriel.png";
import editPic from "../../assets/ModeEdit.svg";

const EditPfp = () => {
  return (
    <section className={classes.container}>
      <div className={classes.clientImg}>
        <img src={gabriel} className={classes.gabriel} />
        <div className={classes.border}></div>
          <a className={classes.editPic}>
            <img src={editPic} className={classes.penEdit} />
          </a>
      </div>
    </section>
  );
};

export default EditPfp;
