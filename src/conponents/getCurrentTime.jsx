export default function getCurrentTime() {
    // Obtener la fecha y hora actual
    const currentDate = new Date();

    // Obtener la hora, minutos y segundos
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Formatear la hora según tus necesidades
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
}
