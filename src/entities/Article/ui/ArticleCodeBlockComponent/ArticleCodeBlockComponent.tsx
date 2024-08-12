import { classNames } from 'shared/lib'
import { memo } from 'react'
import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props

  return (
    <div className={classNames('', {}, [className])}>
      <Code>
        {block.code}
      </Code>
    </div>
  )
})
