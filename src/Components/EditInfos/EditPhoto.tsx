import classes from "./EditPhoto.module.css";
import gabriel from "../../assets/gabriel.png";
import editPic from "../../assets/ModeEdit.svg";

const EditPfp = () => {
  return (
    <section className={classes.container}>
      <div className={classes.clientImg}>
        <div className={classes.border}>
          <img src={gabriel} className={classes.gabriel} />
        </div>
        <a className={classes.ellipse}>
          <img src={editPic} className={classes.penEdit} />
        </a>
      </div>
    </section>
  );
};

export default EditPfp;
