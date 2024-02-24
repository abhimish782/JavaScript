/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todo=[];
  }
  add(item){
    this.todo.push(item);
  }
  remove(index){
    for(let i=0;i<this.todo.length;i++){
      if(i===index) this.todo.splice(index,1);
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todo.length) {
        this.todo[index] = updatedTodo;
    } else {
        console.log("Index out of range.");
    }
}
  getAll(){
    return this.todo;
  }
  get(index){
    if(index>=0&&index<this.todo.length){
      return  this.todo[index];
    }
    else{
      return null;
    }

  }
  clear(){
    this.todo.length=0;
  }
}


module.exports = Todo;
