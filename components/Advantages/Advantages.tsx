import { AdvantagesProps } from './Advantages.props';
import style from './Advantages.module.css';
import CheckIcon from './check.svg'
/**
 * Компонент Преимущества 
 * @param param0 
 * @returns 
 */
export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  // console.log('advantages :>> ', advantages);
  return (
    <>
      {advantages.map(a => {
        return (
          <div key={a._id} className={style.advantage}>
            <CheckIcon />
            <div className={style.title}>{a.title}</div>
            <hr className={style.vline} />
            <div className={style.description}>{a.description}</div>
          </div>
        )
      })}
    </>
  )
};
