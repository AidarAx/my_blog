import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib'
import { Button, ButtonTheme, HStack, Input, Modal, StarRating, Text, VStack } from '@/shared/ui'
import * as cls from './RatingCard.module.scss'

interface RatingCardProps {
  className?: string
  title: string
  feedbackTitle: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept
  } = props

  const { t } = useTranslation()

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [starsCount, setStarsCount] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)

    if (hasFeedback) {
      setIsOpenModal(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandler = useCallback(() => {
    setIsOpenModal(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsOpenModal(false)
    onAccept?.(starsCount)
  }, [onAccept, starsCount])

  return (
    <div className={classNames('', {}, [className])}>
      <VStack align="center" gap={'8'}>
        <Text title={title}/>
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <Modal isOpen={isOpenModal} lazy>
        <VStack max gap={'16'}>
          <Text title={feedbackTitle}/>
          <Input
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
            className={cls.input}
          />
        </VStack>
        <HStack max gap={'16'} justify={'end'}>
          <Button
            onClick={cancelHandler}
            theme={ButtonTheme.OUTLINE_RED}
          >
            {t('Закрыть')}
          </Button>
          <Button
            onClick={acceptHandler}
            theme={ButtonTheme.OUTLINE}
          >
            {t('Отпаравить')}
          </Button>
        </HStack>
      </Modal>
    </div>
  )
}
