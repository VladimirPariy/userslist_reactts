import React, {FC} from 'react';
import styles from './styles/App.module.scss'
import {useFetchingUsers} from "./hooks/useFetchingUsers";
import {useSort} from "./hooks/useSort";
import {useFetchingPosts} from "./hooks/useFetchingPosts";
import * as api from './api/api'
import Filters from "./components/Filters";
import Controls from "./components/Controls";
import Content from "./components/Content";


const App: FC = () => {

  const {users, isUsersLoading, errorUsers} = useFetchingUsers()

  const {pageCount, setPageCount, selectedSort, setSelectedSort, searchUser, setSearchUser, visibleUsers, totalPage} = useSort(users)


  return (
    <div className={styles.wrapper}>
      <Filters selectedSort={selectedSort}
               searchUser={searchUser}
               setSelectedSort={setSelectedSort}
               setSearchUser={setSearchUser}/>
      <div>
        <Content isLoading={isUsersLoading}
                 visibleUsers={visibleUsers}
                 error={errorUsers}
        />
      </div>
      <Controls setPageCount={setPageCount}
                pageCount={pageCount}
                totalPage={totalPage}/>
    </div>
  );
}

export default App;
