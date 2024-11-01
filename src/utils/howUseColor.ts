export const howUseColor = (type: string) => {
  if (type === 'cpu') {
    return ['#025500', '#80ec81'];
  }
  if (type === 'ram') {
    return ['#4a1210', '#e5509c'];
  }
  if (type === 'disk') {
    return ['#6e5f00', '#f6e163'];
  }
  if (type === 'net') {
    return ['#02555c', '#56eaf9'];
  }
  return ['#000', '#fff'];
};
