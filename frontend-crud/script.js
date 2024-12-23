document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const employee = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        department: document.getElementById('department').value
    };

    fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fetchEmployees();
    });
});

function fetchEmployees() {
    fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(data => {
            const employeeList = document.getElementById('employee-list');
            employeeList.innerHTML = '';
            data.forEach(employee => {
                const li = document.createElement('li');
                li.textContent = `${employee.name} - ${employee.role} - ${employee.department}`;
                employeeList.appendChild(li);
            });
        });
}

fetchEmployees();
