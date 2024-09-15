import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { StateSchema } from 'app/providers/StoreProvider'
import {
  getScrollRestorationByPath,
  scrollRestorationActions
} from 'features/scrollRestoration'
import { classNames, useInfiniteScroll, useAppDispatch, useThrottle } from 'shared/lib'
import * as cls from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getScrollRestorationByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  }, [])

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollRestorationActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }))
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
    </section>
  )
}
