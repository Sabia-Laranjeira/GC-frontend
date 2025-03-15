export default function copyObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}