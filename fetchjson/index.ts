import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}
axios
  .get(url)
  .then((response) => {
    const todo: ToDo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
  })
  .catch((err) => console.log(err.response));

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The ToDo with ID:${id}
      Has a title of: ${title}
      Is it finished? ${completed}
      `);
};
