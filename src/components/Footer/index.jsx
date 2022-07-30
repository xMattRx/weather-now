import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import brasil from '../../assets/images/brasil.svg'
import EUA from '../../assets/images/estados-unidos.svg'
import espanha from '../../assets/images/spain.svg'
import { changeLanguage } from '../../redux/languageSlice'
import styles from '../../styles/Footer.module.scss'

function Footer() {
  const {language, select} = useSelector((state) => state.language.value)
  const dispatch = useDispatch()



    return (
        <footer>
            <div className={styles.footer_content}>
                <div className={styles.container_countries}>
                    
                    <img src={brasil} onClick={() => {
                        dispatch(changeLanguage({
                            language: "Português",
                            title: "Como está o tempo hoje?",
                            placeholder: "Digite o nome da cidade",
                            select: "Idioma selecionado:",
                            nextDays: "Ver previsão para os próximos 5 dias",
                            api: "pt_br"
                        }))
                    }} alt={language === 'Português' ? language : language === "English" ? "Portuguese" : "Portugués"} />
                    <img src={EUA} onClick={() => {
                        dispatch(changeLanguage({
                            language: "English",
                            title: "How is the weather today?",
                            placeholder: "Enter the city name",
                            select: "Selected language:",
                            nextDays: "See forecast for the next 5 days",
                            api: "en"
                        }))
                    }} alt={language === 'English' ? language : language === "Português" ? "Inglês" : "Inglés"}/>
                    <img src={espanha} onClick={() => {
                         dispatch(changeLanguage({
                            language: "Español",
                            title: "¿Cómo está el clima hoy?",
                            placeholder: "Introduzca el nombre de la ciudad",
                            select: "Idioma seleccionado:",
                            nextDays: "Ver previsión para los próximos 5 días",
                            api: "es"
                        }))
                    }} alt={language === 'Español' ? language : language === "Português" ? "Espanhol" : "Spanish"} />

                </div>
                <p>{select} {language}</p>
            </div>

        </footer>
    )
}

export default Footer