//  app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again
import {addTask,getAllTasks,completeTask} from './task.js';
addTask('Task 1','low',new Date());
addTask('Task 2','medium',new Date());
addTask('Task 3','high',new Date());
console.log(getAllTasks());
console.log(completeTask(1));
console.log(getAllTasks());
