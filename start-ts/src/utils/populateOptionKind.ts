import kinds from "./data/kinds";

function populateOptionKind() {
  const select = document.getElementById("kind");
  let options = "";

  kinds.forEach((item: any) => {
    options += `<option value="${item}">${item}</option>`;
  });

  console.log(options);

  if (select) {
    select.innerHTML = options || "";
  }
}

export default populateOptionKind;
