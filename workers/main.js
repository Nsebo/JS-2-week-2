import './style.css';

// make an api call to
// https://dummy.restapiexample.com/api/v1/employees

// use map()

// use the destructing syntax

const API_URL = 'https://dummy.restapiexample.com/api/v1/employees';

function getEmployees() {
  fetch(API_URL)
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((employeesData) => {
      console.log('employeesData', employeesData);
      const newEmployeesData = employeesData.map({
        employees_name,
        employees_age,
      });
    });
}

getEmployees();
