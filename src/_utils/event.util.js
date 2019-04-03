export function setDataById(e, data) {
  const id = e.target.id;
  const value = e.target.value;
  console.log(id + '=' + value);
  data[id] = value;
}

export function setDataByName(e, data) {
  const name = e.target.name;
  const value = e.target.value;
  console.log(name + '=' + value);
  data[name] = value;
}
