import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './ArticleViewSelectors.module.scss'
import { ArticleView } from '../../model/types/article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

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

export const ArticleViewSelectors = (props: ArticleViewSelectorsProps) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelectors, {}, [className])}>
      {
        viewsType.map((viewType) => (
          <Button
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
