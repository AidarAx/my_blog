import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <div>{t('Главная страница')}</div>
      <Counter/>
    </>
  )
}

export default MainPage
