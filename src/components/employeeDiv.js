//rendering employee card
export const renderEmployeeCard = (emp) => {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="employee-image">
        <img src="${emp.imageUrl}" alt="Employee Image" />
    </div>
    <p id="emp${emp.id}">${emp.firstName} ${emp.lastName}</p>
    <p>${emp.company}</p>
    `;
  card.className = "employee-card";
  return card;
};
const newEmployee = function (firstName, lastName, company) {
  this.imageUrl = faker.image.imageUrl();
  this.id = faker.random.uuid();
  this.firstName = firstName;
  this.lastName = lastName;
  this.company = company;
  this.email =
    this.firstName + "." + this.lastName + "@" + this.company + ".com";
};
export const renderNewEmployee = (name, surname, company) => {
  const newEmp = new newEmployee(name, surname, company);
  console.log(newEmp);
  const rootDiv = document.getElementById("root");
  return rootDiv.appendChild(renderEmployeeCard(newEmp));
};
