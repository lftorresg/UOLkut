import'./ProfilePhoto.module.css'
import classes from './ProfilePhoto.module.css'
import border from '../../assets/Borda.svg'

function ProfilePhoto() {
    return (
        <>
            <div className={classes.__divProfile}>
                <img src={border} className={classes.__divProfilePhoto}/>
                <h4>Gabriel Barbosa</h4>
                <h5>Solteiro, Brasil</h5>
            </div>


        </>
    )
}

export default ProfilePhoto;