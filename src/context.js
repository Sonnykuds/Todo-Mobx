import { createContext } from "react";
import { action, makeAutoObservable } from "mobx";
import moment from "moment";
export class addTodo {
    todo = []
    selectedRows = []
    selectedDoneRows = []
    doneTasksArray = []
    constructor() {
      makeAutoObservable(this,{
        add: action.bound,
        deleteSelected: action.bound,
        deleteSelectedFinishedTasks: action.bound,
        setSelectedDoneRows: action.bound,
        setSelectedRows: action.bound,
        selectedDoneTask: action.bound,
        undoFinishedTasks: action.bound
      })
    }
    add = (todo) => {
      this.todo.push({...todo, key: this.todo.length})
    }
    deleteSelected = (key) => {
      this.todo = this.todo.filter((todo) => !key.includes(todo.key))
      this.setSelectedRows([])
    }
    deleteSelectedFinishedTasks = (key) => {
      this.doneTasksArray = this.doneTasksArray.filter((done) => !key.includes(done.key))
      this.setSelectedDoneRows([])
    }
    setSelectedRows = (rows) => {
      this.selectedRows = rows
    }
    setSelectedDoneRows= (rows) => {
      this.selectedDoneRows = rows
    }
    selectedDoneTask = (key) => {
      this.todo = this.todo.filter((todo) => {
        if(key.includes(todo.key)){
          this.doneTasksArray.push(todo)
          this.setSelectedRows([])
          return false
        }
        return true
      })
      this.doneTasksArray.map((doneTask) => {
        if (key.includes(doneTask.key)) {
            doneTask.date = moment().format("MMMM DD YYYY")
        }
      })
    }
    undoFinishedTasks = (key) => {
      this.doneTasksArray = this.doneTasksArray.filter((done) => {
        if(key.includes(done.key)){
          this.todo.push(done)
            return false
        }
          return true
        })
        this.setSelectedDoneRows([])
    }
  }
export const Context = createContext()