import "./style.css";
import todoImg from "./img/todo.png";
import todobottomImg from "./img/todobottom.png";

function Header() {
  return (
    <>
        <div className="">
            <img className="todo-img mx-auto" src={todoImg} alt="" />
            <img className="mx-auto mt-[19.9px]" src={todobottomImg} alt="" />
        </div>
    </>
  )
}

export default Header