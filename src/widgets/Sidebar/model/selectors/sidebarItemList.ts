import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import MainIcon from '@/shared/assets/icons/main.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import { RoutePath } from '@/shared/config/RouteConfig/routeConfig'
import { SidebarItemType } from '../types/sidebar'

export const getSidebarItemList = createSelector(
  getUserAuthData,
  (authData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Главное',
        Icon: MainIcon
      },
      {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon
      }
    ]

    if (authData) {
      sidebarItemList.push(
        {
          path: RoutePath.profile + authData.id,
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: ArticleIcon,
          authOnly: true
        }
      )
    }

    return sidebarItemList
  }
)
