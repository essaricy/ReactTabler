export function setDataById(e, data) {
  let id = e.target.id;
  let value = e.target.value;
  console.log(id + '=' + value);
  data[id] = value;
}

export function setDataByName(e, data) {
  let name = e.target.name;
  let value = e.target.value;
  data[name] = value;
}
