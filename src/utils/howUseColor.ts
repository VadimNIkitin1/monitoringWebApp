export const howUseColor = (type: string) => {
  if (type === 'cpu') {
    return ['#80ec81', '#025500'];
  }
  if (type === 'ram') {
    return ['#e5509c', '#4a1210'];
  }
  if (type === 'disk') {
    return ['#f6e163', '#6e5f00'];
  }
  if (type === 'net') {
    return ['#56eaf9', '#02555c'];
  }
  return ['#000', '#fff'];
};
