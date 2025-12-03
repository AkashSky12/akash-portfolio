import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="container">
        <p>{t('footer.copyright')}</p>
        <p><a href="https://github.com/AkashSky12">GitHub</a> · <a href="https://www.linkedin.com/in/akash-simon">LinkedIn</a></p>
      </div>
    </footer>
  )
}
