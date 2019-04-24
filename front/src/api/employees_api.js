import fetch from "cross-fetch";

export const fetchEmployees = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/employees/');
        const fetched_employees = await response.json();
        return fetched_employees;
    } catch (e) {
        console.log(e);
    }
};

export const putEmployee = async (employee) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/employees/' + employee.pesel + "/", {
            method: 'PUT',
            body: JSON.stringify(employee), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (e) {
        console.log(e)
    }
};

export const postEmployee = async (employee) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/employees/', {
            method: 'POST',
            body: JSON.stringify(employee), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const added_employee = await response.json();
        return added_employee;
    } catch (e) {
        console.log(e);
    }
};


export const deleteEmployee = async (pesel) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/employees/' + pesel + '/', {
            method: 'DELETE',
            body: JSON.stringify(pesel), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const removed_employee = await response.json();
        return removed_employee
    } catch (e) {
        console.log(e)
    }
};