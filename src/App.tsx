import "./App.css";
import { FormEvent, useEffect, useState } from "react"
import { data } from "./data"
import { IObject } from "./IData";
import Header from "./components/MyHeader/Header";
import MyList from "./components/MyLists/MyList";

function App() {

  const [todo, setTodo] = useState<IObject[]>([]);
  const [title, setTitle] = useState<any>("")

  useEffect(() => {
    setTodo([...data])
  }, [])

  const addTodo = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (title.trim().length == 0) {
      alert("Plise enter input");
    } else {
      let obj = {
        id: new Date().getTime(),
        title: title
      }
      setTodo([...todo, obj])
    }

    setTitle("");
  }

  const deleteTodo = (id: number): void => {
    let arr = todo.filter(el => el.id !== id);

    setTodo(arr);
  }

  return (
    <div>
      <Header />
      <div className="max-w-[966px] border-b-2 pb-[34.9px] mx-auto mb-[79px]">
        <form onSubmit={(event) => {
          addTodo(event);
        }} className="relative w-[826px] mx-auto mt-[91px]">
          <input className="bg-[#D9D9D9] text-[24px] font-bold px-4 !pr-[180px] outline-none  w-[826px] h-[49.4px] rounded-[20px]" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button className="absolute italic right-0 bg-[#4F4F4F] w-[142.69px] h-[49.44px] rounded-[20px] text-[25px] font-bold text-[#FFFFFF]">Add task</button>
        </form>
      </div>
      <ul className="flex flex-col gap-[35px]">
        {
          title.trim() == 0 && (
          todo.map(el => {
            return <MyList key={el.id} title={el.title} delClick={() => deleteTodo(el.id)} />
          }) ) || (
            todo.filter(el => el.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())).map(el => {
              return <MyList key={el.id} title={el.title} delClick={() => deleteTodo(el.id)} />
            })
          )
        }
      </ul>
    </div>
  )
}

export default App