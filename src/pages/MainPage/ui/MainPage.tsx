import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { RatingCard } from '@/entities/Rating'

const MainPage = memo(() => {
  const { t } = useTranslation()

  return (
    <>
      <Page>{t('Главная страница')}</Page>
      <RatingCard
        title={'Как вам статья?'}
        feedbackTitle={'Напишите свой отзыв'}
        hasFeedback={true}
      />
    </>
  )
})

export default MainPage
