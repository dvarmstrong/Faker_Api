const { response } = require("express");
const faker = require("faker");
const express = require("express");
const app = express();
const port = 3000;

// Create a function that returns a CreateUser and a CreateCompany object.

// createUser Object
const createUser =() => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.random.uuid()
        
    };
        return newUser;
   
};

const newFakeUser = createUser();
console.log(newFakeUser);

// createCompany Object
const createCompany =() => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
        return newCompany;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api", (req,res) => {
    res.send("Hello the server is loaded on port 3000!");
});

app.get("/api/user/new/", (req,res) => {
    res.send(newFakeUser);
});

app.get("/api/companies/new", (req,res) => {
    res.send(newFakeCompany);
});

app.get("/api/user/companies/new", (req,res) => {
    const newUser =createUser();
    const newCompany = createCompany();
    const companyAndUser = {
        user: newUser,
        company: newCompany,
    };
    res.send(companyAndUser);
    
});


app.listen(port , () => console.log(`Server is running on port ${port}`));

