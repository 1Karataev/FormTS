import React from 'react'
import classes from './Text.module.scss';
import { SK, D, last } from './images';
const Text: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.images}>
        {SK.map((img, i) => (
          <img key={i} src={img} className={classes.sk}></img>
        ))}
        <div style={{ width: '65px', height: '100%', marginBottom: '0' }}>
          {D.map((d, i) => (
            <img key={i} src={d} className={i == 1 ? classes.d : ''}></img>
          ))}
        </div>

        {last.map((img, i) => (
          <img key={i} src={img} className={ classes.last}></img>
        ))}
      </div>
      <div className={classes.title}>
        <p>Оставьте заявку и станьте частью нашей команды</p>
      </div>
      <div className={classes.parag}>
        <p>
          Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров,
          архитекторов и декораторов, <br /> дизайн-бюро и интерьерные студии — все, кто дизайн
          интерьера сделали своим призванием.
        </p>
        <p>
          Партнерство мы видим как доверительные отношения, основанные на честности реализации
          бизнес идей в сфере создания и продаж
          <br /> современной, качественной, удобной, функциональной и эксклюзивной мебели.
        </p>
        <p>
          Ознакомиться с проектами можете в нашем <span className={classes.span}>портфолио</span> .
          Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с <br /> радостью
          поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте
          у менеджеров) и <br /> разработаем коммерческое предложение к Вашему проекту или
          изображениям.
        </p>
      </div>
    </div>
  );
};

export default Text






