import { TextField} from '@mui/material';
import React, { useEffect, useState } from 'react'
import FormSelect from './FormSelect';
import classes from './Form.module.scss'
import cities from '../JSON/cities.json';
import { FormState, setForm } from '../redux/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import sources from '../JSON/sources.json'
import { RootState } from '../redux/store';
import { CSSTransition } from 'react-transition-group';
 

const Form:React.FC = ()=> {
  const [name, setName] = useState<string>('');
  const [namber, setNamber] = useState<number | string>('');
  const [email, setEmail] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [org, setOrg] = useState<string>('');
  const [fam, setFam] = useState<string>('');
  const [nameBol, setNameBol] = useState<boolean>(false);
  const [namberBol, setNamberBol] = useState<boolean>(false);
  const [emailBol, setEmailBol] = useState<boolean>(false);
  const [linkBol, setLinkBol] = useState<boolean>(false);
  const [span, setSpan] = useState<boolean>(false)
  const [disable,setDisable] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<FormState>();
  const dispatch = useDispatch()

  const select = useSelector((state:RootState) => state.form.citi)

  const nameHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

     e.target.value.length <= 1 ? setNameBol(true) : setNameBol(false);
  };
  const namberHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamber(e.target.value);
    const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
    !reg.test(e.target.value.toLocaleLowerCase()) ? setNamberBol(true) : setNamberBol(false);
  };
  const emailHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const reg = /.+@.+\..+$/i;
    !reg.test(e.target.value.toLocaleLowerCase()) ? setEmailBol(true) : setEmailBol(false);
  };
  const linkHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
    e.target.value !== '' && e.target.value.length <= 3 ? setLinkBol(true) : setLinkBol(false);
  };
   const Sub: SubmitHandler<FormState> = async (data) => {
     setLoading(!loading);
      setTimeout(() => {
      dispatch(setForm(data));
      setLoading(false);
      setName('');
      setNamber('');
      setEmail('');
      setLink('');
      setOrg('');
      setFam('');}, 2000);
      
   };
  
  const spanHundler = () =>{
    setSpan(!span)
  }
 
  useEffect(() => {
    setDisable(true) ;
    (nameBol || name == '') ||
    (emailBol || email == '') ||
    (namberBol || namber == '')  ||
    (linkBol || link == '') ||
    (select == '')
      ? setDisable(true)
      : setDisable(false);
  }, [name, email, namber,link,select]);
  
  return (
    <form action="" className={classes.form} onSubmit={handleSubmit(Sub)}>
      <div className={classes.inputs}>
        <TextField
          required
          id="outlined-required"
          label="Ваше имя"
          placeholder="Иван"
          value={name}
          className={classes.inputs_input}
          error={nameBol}
          {...register('name')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => nameHundler(e)}
        />
        <TextField
          required
          id="outlined-required"
          label="Номер телефона"
          placeholder="+7 (000) 000-00-00"
          value={namber}
          className={classes.inputs_input}
          error={namberBol}
          {...register('namber')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => namberHundler(e)}
        />
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          placeholder="example@skdesign.ru"
          value={email}
          className={classes.inputs_input}
          error={emailBol}
          {...register('email')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => emailHundler(e)}
        />
        <TextField
          required
          id="outlined-required"
          label="Ссылка на профиль"
          placeholder="instagram.com/skde…"
          value={link}
          className={classes.inputs_input}
          error={linkBol}
          {...register('link')}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => linkHundler(e)}
        />
      </div>
      <FormSelect
        required={true}
        sel={'Выберите город *'}
        obj={cities}
        reg={{ ...register('citi') }}
      />
      <TextField
        id="outlined-required"
        label="Название организации/студии"
        placeholder="SK Design"
        value={org}
        className={classes.select}
        {...register('org')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOrg(e.target.value)}
      />

      <div className={classes.arrow} onClick={spanHundler}>
        {span ? 'Скрыть дополнительные поля' : 'Показать дополнительные поля'}
        <span className={span ? classes.arrow_rotate : ''} />
      </div>

      <CSSTransition in={span} timeout={300} classNames="alert" mountOnEnter unmountOnExit>
        <>
          <TextField
            id="outlined-required"
            label="ФИО"
            placeholder="ФИО"
            value={fam}
            className={classes.select}
            {...register('fam')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFam(e.target.value)}
          />
        </>
      </CSSTransition>

      <CSSTransition in={span} timeout={300} classNames="alert" mountOnEnter unmountOnExit>
        <>
          <FormSelect
            required={false}
            sel={'От куда узнали про нас?'}
            obj={sources}
            reg={{ ...register('sources') }}
          />
        </>
      </CSSTransition>

      <LoadingButton
        size="small"
        loading={loading}
        variant="contained"
        onClick={handleSubmit(Sub)}
        className={!disable ? '' : classes.btn}
        disabled={disable}>
        Отправить заявку
      </LoadingButton>
    </form>
  );
}

export default Form








{/* <div className={classes.arrow} onClick={spanHundler}>
  {span ? 'Скрыть дополнительные поля' : 'Показать дополнительные поля'}
  <span className={span ? classes.arrow_rotate : ''} />
</div>;

{
  span && (
    <>
      <TextField
        id="outlined-required"
        label="ФИО"
        placeholder="ФИО"
        value={fam}
        className={classes.select}
        {...register('fam')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFam(e.target.value)}
      />
      <FormSelect
        required={false}
        sel={'От куда узнали про нас?'}
        obj={sources}
        reg={{ ...register('sources') }}
      />
    </>
  );
} */}