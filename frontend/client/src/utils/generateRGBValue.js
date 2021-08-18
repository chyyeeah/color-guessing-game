export default () => {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random() * 256));
  }
  return arr.join(',');
};