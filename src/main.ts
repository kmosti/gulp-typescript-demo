import { sayHello } from "./greet";
import { IUserList, IUser } from "./Igreet";
const random = require('random-name');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

function showUsers(divName: string) {
    const elt = document.getElementById(divName);
    const data = generateData(20).users;
    let tableHtml = data.map( user => {
        return `
            <tr>
                <td>${user.age}</td>
                <td>${user.name}</td>
                <td>${user.sex}</td>
            </tr>
        `;
    });
    elt.innerText = "";
    elt.innerHTML = tableHtml.join("");
}

function generateData (numberOfUsers: number): IUserList {
    let userList: IUserList = {
        department: "EXP",
        users: []
    };
    for (let i = 0; i < numberOfUsers; i++) {
        let user: IUser = { 
            name: random.last(),
            age: Math.floor(Math.random() * 20) + 40,
            sex: Math.floor(Math.random() * 20) % 2 ? "FEMALE" : "MALE"
        };
        userList.users.push(user);
    }
    return userList;
}

showHello("greeting", "TypeScript Test");
showUsers("users");