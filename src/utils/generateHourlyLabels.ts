export function generateHourlyLabels(count = 10) {
  const labels = [];
  const now = new Date();
  let hour = now.getHours();

  for (let i = 0; i < count; i++) {
    labels.push(`${hour.toString().padStart(2, '0')}:00`);
    hour = (hour + 1) % 24;
  }

  return labels.reverse();
}
