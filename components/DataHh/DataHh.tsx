import { DataHhProps } from './DataHh.props';
import style from './DataHh.module.css';
import { Card } from '..';
import RateIcon from './rate.svg'

export const DataHh = ({ count, juniorSalary, middleSalary, seniorSalary }: DataHhProps): JSX.Element => {
  return (
    <div className={style.hh}>
      <Card className={style.count}>
        <div className={style.title}>Всего вакансий</div>
        <div className={style.coundValue}>{count}</div>
      </Card>
      <Card className={style.salary}>
        <div >
          <div className={style.title}>Начальный</div>
          <div className={style.salaryValue}>{juniorSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div >
          <div className={style.title}>Средний</div>
          <div className={style.salaryValue}>{middleSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon />
          </div>
        </div>
        <div >
          <div className={style.title}>Профессионал</div>
          <div className={style.salaryValue}>{seniorSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
          </div>
        </div>
      </Card>
    </div>
  )
};
