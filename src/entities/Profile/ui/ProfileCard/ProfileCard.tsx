import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib'
import { Text, TextAlign, TextTheme, Input, Loader, Avatar, HStack, VStack } from 'shared/ui'
import * as cls from './ProfileCard.module.scss'
import { Profile } from '../../model/types/profile'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency
  } = props

  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <HStack justify={'center'} align={'center'} className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader/>
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack justify={'center'} align={'center'} className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузки страницы')}
          text={t('Попроубуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <VStack gap={'16'} className={classNames(cls.profileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify={'center'} max>
          <Avatar src={data?.avatar} alt={'Avatar'} size={150}/>
        </HStack>
      )}
      <Input
        value={data?.firstname}
        onChange={onChangeFirstname}
        readonly={readonly}
        placeholder={t('Имя')}
      />

      <Input
        value={data?.lastname}
        onChange={onChangeLastname}
        readonly={readonly}
        placeholder={t('Фамилия')}
      />

      <Input
        value={data?.age}
        onChange={onChangeAge}
        readonly={readonly}
        placeholder={t('Возрост')}
      />

      <Input
        value={data?.city}
        onChange={onChangeCity}
        readonly={readonly}
        placeholder={t('Город')}
      />

      <Input
        value={data?.username}
        onChange={onChangeUsername}
        readonly={readonly}
        placeholder={t('Имя пользователя')}
      />

      <Input
        value={data?.avatar}
        onChange={onChangeAvatar}
        readonly={readonly}
        placeholder={t('Аватар')}
      />

      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />

      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  )
}
