const interfaceConst = 'interface';

module.exports = (componentName) => `import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import * as cls from './Test.module.scss'

${interfaceConst} ${componentName}Props {
  className?: string
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props
  const { t } = useTranslation()
    
  return (
    <div className={classNames(cls.Test, {}, [className])}>

    </div>
  )
});`;

// import { memo } from 'react'
// import { useTranslation } from 'react-i18next'
// import { classNames } from 'shared/lib'
// import * as cls from './Test.module.scss'
//
// interface TestProps {
//   className?: string
// }
//
// export const Test = memo((props: TestProps) => {
//   const { className } = props
//   const { t } = useTranslation()
//
//   return (
//     <div className={classNames(cls.Test, {}, [className])}>
//
//     </div>
//   )
// })
