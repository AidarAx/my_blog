import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { classNames } from '@/shared/lib'
import { Text } from '@/shared/ui'

const ProfilePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('profile')

  if (!id) {
    return (
      <Text text={t('Профиль не найден')}/>
    )
  }

  return (
    <Page className={classNames('', {}, [])}>
      <EditableProfileCard id={id}/>
    </Page>
  )
})

export default ProfilePage
