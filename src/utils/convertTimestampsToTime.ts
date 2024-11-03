export function convertTimestampsToTime(
  input: number | { timestamp: number }[]
): string[] | undefined {
  if (Array.isArray(input)) {
    // Обработка массива, форматирование в массив строк (чч:мм)
    return input.map((metric) => {
      const date = new Date(metric.timestamp * 1000);
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    });
  } else {
    // Обработка одиночного значения, форматирование в строку (чч:мм:сс/дд:мм:гггг)
    const date = new Date(input * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц начинается с 0
    const year = date.getFullYear();
    return [`${hours}:${minutes}:${seconds} / ${day}:${month}:${year}`];
  }
}
