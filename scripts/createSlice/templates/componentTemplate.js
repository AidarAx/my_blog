const interfaceConst = 'interface';

module.exports = (componentName) => `import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import * as cls from './${componentName}.module.scss'

${interfaceConst} ${componentName}Props {
  className?: string
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props
  const { t } = useTranslation()
    
  return (
    <div className={classNames(cls.${componentName}, {}, [className])}>

    </div>
  )
});`;
