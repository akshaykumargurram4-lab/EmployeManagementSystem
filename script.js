
function addEmployee() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;

    if (name === "" || role === "") {
        alert("Please enter all details");
        return;
    }

    let employee = document.createElement("li");

    employee.textContent = name + " - " + role;

    document.getElementById("employeeList")
        .appendChild(employee);

    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
}
