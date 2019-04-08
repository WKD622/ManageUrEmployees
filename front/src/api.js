export const fetchData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/employees/');
        const employees = await response.json();
        console.log("fetchData");
        console.log(employees);
        return employees;
    } catch (e) {
        console.log(e);
    }
};
