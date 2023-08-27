import classes from "./ProfileDetails.module.css";
import Star from "../../assets/Star.svg";
import Smile from "../../assets/Smiley.svg";
import ThumbsUp from "../../assets/ThumbsUp.svg";
import PressedThumbsUp from "../../assets/PressedThumbsUp.svg";
import Heart from "../../assets/Heart.svg";
import { useEffect, useState } from "react";

function ProfileDetails() {
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 360) {
        const spans = document.querySelectorAll(
          `.${classes.__divPreferences} span`
        )! as NodeListOf<HTMLSpanElement>;

        spans.forEach((span) => {
          const text = span.textContent;

          if (
            text !== "Trap" &&
            text !== "A rede social" &&
            text !== "Ver Todos"
          ) {
            span.style.display = "none";
          }
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [liked, setLiked] = useState<boolean[]>([false, false, false]);

  const handleThumbsClick = (thumb: number) => {
      setLiked(prevStatus => {
          const newStatus = prevStatus.map((status, i) => (i === thumb ? !status : status));
          return newStatus;
      });
  };

  return (
    <>
      <div className={classes.__divContainer}>
        <h3 className={classes.nameTag}>Boa tarde, Iuri</h3>
        <h3 className={classes.inputName}>
          <span className={classes.inputNameContent}>
            Programar sem café é igual poeta sem poesia.
          </span>
        </h3>
        <div className={classes.__divImg}>
          <section className={classes.fans}>
            <p>Fãs</p>
            <div className={classes.fansRow}>
              <img className={classes.img} src={Star} alt="Star" />
              <h6>85</h6>
            </div>
          </section>
          <section className={classes.reliable}>
            <p>Confiável</p>
            <img className={classes.img} src={Smile} alt="Smile" />
            <img className={classes.img} src={Smile} alt="Smile" />
          </section>
          <section className={classes.coolness}>
            <p>Legal</p>
            {liked.map((isPressed, thumb) => (
                    <img
                        key={thumb}
                        src={isPressed ? PressedThumbsUp : ThumbsUp}
                        onClick={() => handleThumbsClick(thumb)}
                    />
                ))}
          </section>
          <section className={classes.sexiness}>
            <p>Sexy</p>
            <img className={classes.img} src={Heart} alt="Heart" />
            <img className={classes.img} src={Heart} alt="Heart" />
          </section>
        </div>
        <div className={classes.__divDetails}>
          <h4 className={classes.details}>
            Relacionamento: <span>Solteiro</span>
          </h4>
          <h4 className={classes.details}>
            Aniversario: <span>21 de julho</span>
          </h4>
          <h4 className={classes.details}>
            Idade: <span>22</span>
          </h4>
          <h4 className={classes.details}>
            Quem sou eu: <span>Programador</span>
          </h4>
          <h4 className={classes.details}>
            Moro: <span>Guarantã</span>
          </h4>
          <h4 className={classes.details}>
            País: <span>Brasil</span>
          </h4>
          <h4 className={classes.details}>
            Cidade: <span>São Paulo</span>
          </h4>
        </div>
        <div className={classes.__divPreferences}>
          <h4 className={classes.h}>
            Músicas: <span className={classes.word}>Trap</span>{" "}
            <span className={classes.word}>Rap</span>{" "}
            <span className={classes.word}>Indie</span>{" "}
            <span className={classes.verTodos}>Ver Todos</span>
          </h4>
          <h4 className={classes.h}>
            Filmes: <span className={classes.word}>A rede social</span>{" "}
            <span className={classes.word}>Meu amigo totoro</span>{" "}
            <span className={classes.verTodos}>Ver Todos</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
