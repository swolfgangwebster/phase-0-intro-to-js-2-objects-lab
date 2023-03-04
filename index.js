// Write your solution in this file!

const employee = { name: "", streetAddress: ""};


function updateEmployeeWithKeyAndValue(e,k,x) {
    const e2c ={...e};
    e2c[k]=x
    return e2c

}
//console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress","114 huntinhton"));

function destructivelyUpdateEmployeeWithKeyAndValue(e,k,x) {
    e[k]=x
    return e;
}

function deleteFromEmployeeByKey(e,n) {
    const e2 = {...e}
    delete e2[n];
    return e2;

}

function destructivelyDeleteFromEmployeeByKey(e,n) {
    delete e[n];
    return e
}