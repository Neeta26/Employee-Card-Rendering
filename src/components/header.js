export const header = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const h1 = document.createElement("h1");
  h1.innerHTML = "OUR TEAM";
  header.appendChild(h1);
  return header;
};
