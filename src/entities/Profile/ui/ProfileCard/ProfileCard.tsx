import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import * as cls from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
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
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader/>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузки страницы')}
          text={t('Попроубуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt={'Avatar'}/>
          </div>
        )}
        <Input
          value={data?.firstname}
          onChange={onChangeFirstname}
          readonly={readonly}
          placeholder={'Имя'}
          className={cls.input}
        />

        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          readonly={readonly}
          placeholder={'Фамилия'}
          className={cls.input}
        />

        <Input
          value={data?.age}
          onChange={onChangeAge}
          readonly={readonly}
          placeholder={'Возрост'}
          className={cls.input}
        />

        <Input
          value={data?.city}
          onChange={onChangeCity}
          readonly={readonly}
          placeholder={'Город'}
          className={cls.input}
        />

        <Input
          value={data?.username}
          onChange={onChangeUsername}
          readonly={readonly}
          placeholder={'Имя пользователя'}
          className={cls.input}
        />

        <Input
          value={data?.avatar}
          onChange={onChangeAvatar}
          readonly={readonly}
          placeholder={'Аватар'}
          className={cls.input}
        />

        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
          className={cls.input}
        />

        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
          className={cls.input}
        />
      </div>
    </div>
  )
}
