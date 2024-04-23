import { classNames } from 'shared/lib/classNames/classNames';
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      

      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default App;