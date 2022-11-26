

/**
 * get all tasks from localStorage.
 * @returns {Array} todos
 */
export function getTasksFromLocalStorage() {
  const tasks = localStorage['tasks'];
  return tasks ? JSON.parse(tasks) : [];
}

/**
 * set task in localStorage.
 * @param {any} tasks[] - Represents list of tasks.
 */
export function setTaskLocalStorage(tasks) {
  localStorage['tasks'] = JSON.stringify(tasks)
}


// export function getNewId = (): number => {
//   const tasksDb = localStorage['tasks'];
//   let listaTasks = tasksDb ? JSON.parse(tasksDb) : [];
//   return listaTasks.length++;
// }

/**
 * set task in localStorage.
 * @param {any} newTask - Represents one task.
 */
export function addTaskLocalStorage(newTask){

  const tasks = getTasksFromLocalStorage()
  tasks.push(newTask);
  setTaskLocalStorage(tasks)
  return tasks
}

/**
 * set task in localStorage.
 * @param {any} newTask - Represents one task.
 */
export function removeTaskLocalStorage(taskId){
  let tasks = getTasksFromLocalStorage()
  tasks = tasks.filter(task => task.id !== taskId)
  setTaskLocalStorage(tasks)
  return tasks
}

/**
 * change task in localStorage.
 * @param {number} taskId- Id task.
 * @param {any} newStatus - 'to_do' | 'in_progress' | 'done' | 'archived'
 */
export function changeTaskStatus(taskId, newStatus){
  let tasks = getTasksFromLocalStorage()
  tasks =  tasks.map((item) => ( item.id === taskId ?  { id: item.id, description: item.description, status: newStatus } : item ))
  setTaskLocalStorage(tasks)
  return tasks
}