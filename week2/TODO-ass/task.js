// task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions
import {validateTitle,validatePriority,validateDueDate} from './validator.js';
const tasks = [];
function addTask(title, priority, dueDate) {
    if(validateTitle(title)&&validatePriority(priority)&&validateDueDate(dueDate)){
        tasks.push({title,priority,dueDate,completed:false});
        return "Task added successfully";
    }
    return "Invalid task details";
}
function getAllTasks() {
    return tasks;
}
function completeTask(taskId) {
    for(let i=0;i<tasks.length;i++){
        if(i+1===taskId){
            tasks[i].completed=true;
            return "Task completed successfully";
        }
    }
    return "Task not found";
}
export {addTask,getAllTasks,completeTask};
