import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage/index';
import { MainPage } from 'pages/MainPage/index';

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import {useTheme} from "app/providers/ThemeProvider";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to={'/'}>main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage/>}/>
          <Route  path='/' element={<MainPage/>}/>
        </Routes>
      </Suspense> 
    </div>
  )
}

export default App;