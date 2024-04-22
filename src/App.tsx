import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to={'/'}>main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route  path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense> 
    </div>
  )
}

export default App;