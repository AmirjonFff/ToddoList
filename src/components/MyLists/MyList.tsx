import "./style.css";
import MyImg from "./img/carzina.png";

function MyList({title, delClick}: {title: string, delClick?: any}) {
  return (
    <li className="llll mx-auto w-[822px] relative">
      <h1 className="w-[822px] h-[38px] bg-[#222222] rounded-[10px] pl-[18px] pr-[141px] pb-[8px] pt-[7px] text-white text-[19px]">
        {title}
      </h1>
      <button className="w-[38px] absolute right-0 top-0 h-[38px] bg-[#999999] rounded-[10px] flex justify-center items-center" onClick={delClick}><img src={MyImg} alt="" /></button>
    </li>
  );
}

export default MyList;
