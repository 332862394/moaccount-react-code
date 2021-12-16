let id = parseInt(window.localStorage.getItem("indexMax") || "0");
const createId = () => {
  id += 1;
  window.localStorage.setItem("indexMax", JSON.stringify(id));
  return id;
};

export { createId };
