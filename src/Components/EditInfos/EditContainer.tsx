import EditInfos from "./EditInfos";
import EditPfp from "./EditPhoto";

import classes from './EditContainer.module.css'

const Editing = () => {
  return (
    <section className={classes.editComps} >
      <EditPfp />
      <EditInfos />
    </ section>
  );
};

export default Editing;
