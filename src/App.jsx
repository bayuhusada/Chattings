import Chat from "./components/chat/Chat";
import Daftar from "./Components/daftar/Daftar";
import Detail from "./components/detail/Detail";


export default function App() {
  return (
    <div className=" w-[90vw] flex bg-slate-400 h-[90vh] rounded-xl" >
      <Daftar />
      <Chat />
      <Detail />
    </div>
  )
}