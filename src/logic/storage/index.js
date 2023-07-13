export const saveGameToStorage = ({ a, b }) => {
  window.localStorage.setItem("board", JSON.stringify(a));
  window.localStorage.setItem("turn", b);
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
