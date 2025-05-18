export default function isNumber(n) {
  if(n === "") {
    return false
  }
  return !Number.isNaN(Number(n));
}