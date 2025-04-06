import { Typography } from "@/shared/typography/typography";
import { TotalUsersCount } from "@/widgets/totalCountOfUsers/ui/TotalUsersCount";

import s from'./PostsPage.module.scss'
export function PostsPage(){
  return <div className={s.container}>
    <TotalUsersCount/>
    <Typography variant={'H1'}>public posts page</Typography>
  </div>
}