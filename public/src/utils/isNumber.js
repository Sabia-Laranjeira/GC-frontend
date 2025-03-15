export default function isNumber(n) {
  //Check if exist any character.
  if(n.length > 0) {
    return !Number.isNaN(Number(n));
  }
  return false
}