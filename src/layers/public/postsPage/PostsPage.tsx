import { PublicPostsList } from "@/widgets/publicPostsList/PublicPostsList";
import { TotalUsersCount } from "@/widgets/totalCountOfUsers/ui/TotalUsersCount";

import s from'./PostsPage.module.scss'
export function PostsPage(){
  return <div className={s.container}>
    <TotalUsersCount/>
    <PublicPostsList/>
  </div>
}