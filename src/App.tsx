import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBarMenu, Footer } from './components';
import { UserContext } from './context/UserContext';
import { AboutMe, ContentSite, Login, Page404 } from './pages';

function App() {
  const user = {
    id: 1,
    username: 'cambio',
    email: 'cambio@gmail.com',
    password: 'cambio',
  };
  const [inputSearch, setInputSearch] = useState('')

  return (
    <>
      <UserContext.Provider value={user}>
        <AppBarMenu inputSearch={(e: string) => setInputSearch(e)}/>
        <Routes>
          <Route path='/' element={<ContentSite inputSearch={inputSearch} />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Page404' element={<Page404 />} />
          {/* 404 No se Encontro la pagina */}
          <Route path='/*' element={<Navigate to='/Page404' />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
