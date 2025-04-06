'use client'

import { useGetTotalCountOfUsersQuery } from '@/widgets/totalCountOfUsers/api/countApi'
import { number } from 'zod'

import s from './TotalUsersCount.module.scss'
export function TotalUsersCount() {
  const { data } = useGetTotalCountOfUsersQuery()

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
