import { memo } from 'react'
import { classNames } from '@/shared/lib'
import { Text } from '@/shared/ui'
import { ArticleTextBlock } from '../../model/types/article'
import * as cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props

  return (
      <div className={classNames('', {}, [className])}>
        {block.title && (
          <Text title={block?.title} className={cls.title}/>
        )}
        {block.paragraphs.map(paragraph => (
          <Text key={paragraph} text={paragraph} className={cls.paragraph}/>
        ))}
      </div>
  )
})
