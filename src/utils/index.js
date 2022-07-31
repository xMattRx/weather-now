export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function monthLanguage(language, month) {
    let array = []
    if (language === "English") {
        array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    } else if (language === "Español") {
        array = ['Enero', 'Febrero', 'Marzo', 'Aprino', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre']
    } else {
        array = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    }
    return array[month - 1]
}

export function dayOfWeekLanguage(language, day) {
    let array = []
    if (language === "English") {
        array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    } else if (language === "Español") {
        array = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    } else {
        array = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    }

    return array[day - 1]
}