import { memo } from 'react'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { classNames } from 'shared/lib'
import { Button, ButtonTheme, Icon } from 'shared/ui'
import { ArticleView } from '../../model/types/article'
import * as cls from './ArticleViewSelectors.module.scss'

interface ArticleViewSelectorsProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewsType = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  }
]

export const ArticleViewSelectors = memo((props: ArticleViewSelectorsProps) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
      <div className={classNames(cls.ArticleViewSelectors, {}, [className])}>
        {
          viewsType.map((viewType) => (
            <Button
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <Icon
                Svg={viewType.icon}
                className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
              />
            </Button>
          ))
        }
      </div>
  )
}
)
