import { getTotalUsersCount } from '@/widgets/totalCountOfUsers/api/countApi'

import s from './TotalUsersCount.module.scss'

export async function TotalUsersCount() {
  const data = await getTotalUsersCount()

  return (
    <div className={s.countContainer}>
      <span>Registered users:</span>
      <ul className={s.counter}>
        {data?.totalCount.map((number, index) => (
          <li className={s.item} key={index}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  )
}
