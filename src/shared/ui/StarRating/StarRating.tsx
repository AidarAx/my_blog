import { memo, useCallback, useState } from 'react'
import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon/Icon'
import * as cls from './StarRating.module.scss'

interface StarRatingProps {
  className?: string
  onSelect?: (starCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
  const { className, selectedStars = 0, onSelect, size = 30 } = props

  const [currentStarsCount, setCurrentStarsCount] = useState<number>(0)
  const [isSelected, setIsSelected] = useState<boolean>(!!selectedStars)

  const onHover = useCallback((starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }, [isSelected])

  const onLeave = useCallback(() => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }, [isSelected])

  const onClick = useCallback((starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }, [isSelected, onSelect])

  return (
    <div className={classNames('', {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            cls.starIcon,
            { [cls.selected]: isSelected },
            [currentStarsCount >= starNumber ? cls.hovered : cls.normal]
          )}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  )
})
