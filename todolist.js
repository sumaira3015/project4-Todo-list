#!/usr/bin/env node
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    // ---------options-----------
    let option = await inquirer.prompt([{
            type: 'list',
            name: "user_option",
            message: 'select an options',
            choices: ["Add", "Remove"]
        }]);
    // -------------answers-Add---------
    if (option.user_option === "Add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "user_ans",
                message: "write something to add in the todo_list."
            }]);
        if (ans.user_ans !== " ") {
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }
        else {
            console.log("Please write something to Add in the Todo-list.");
        }
    }
    // ---------Remove -----------
    else if (option.user_option === "Remove") {
        let removeChoice = await inquirer.prompt([{
                type: "list",
                name: "remove_item",
                message: "Select Item to remove.",
                choices: todo_list
            }]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log("You remove:", removeChoice.remove_item);
            console.log(todo_list);
        }
    }
    // ------confirmation------
    let userAnswer = await inquirer.prompt([{
            type: "confirm",
            name: "selection",
            message: "Do you want to continue.",
            default: true
        }]);
    if (userAnswer.selection === false) {
        while_condition = false;
    }
}
console.log(`Thankyou for using Todolist`);
