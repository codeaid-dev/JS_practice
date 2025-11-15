
const table = document.getElementById("table");
const tbody = table.querySelector("tbody");
const theads = table.querySelectorAll("th");
const namebtn = document.getElementById("namebtn");
const agebtn = document.getElementById("agebtn");
let asc = true;

for (let i=0; i<theads.length; i++) {
  theads[i].addEventListener('click', () => {
  });
}
table.querySelectorAll("th").forEach((th, index) => {
  th.onclick = () => {
    const rows = [...tbody.querySelectorAll("tr")];
    rows.sort((a, b) => {
      const valA = a.children[index].textContent;
      const valB = b.children[index].textContent;
      return asc ? valA.localeCompare(valB, "ja", { numeric: true }) : valB.localeCompare(valA, "ja", { numeric: true });
    });
    rows.forEach(r => tbody.appendChild(r));
    asc = !asc;
  };
});