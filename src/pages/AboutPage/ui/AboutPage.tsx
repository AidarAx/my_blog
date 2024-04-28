import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about');

  return (
    <h1>{t('О сайте')}</h1>
  )
}

export default AboutPage;