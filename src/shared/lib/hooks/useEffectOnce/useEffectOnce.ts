import { EffectCallback, useEffect } from 'react'

export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      effect()
    }

    // eslint-disable-next-line
  }, [])
}
