import Header from "./components/header";
import Card from "./components/card";
import Todo from "./components/todo";
function App() {
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header></Header>
        <div className="flex justify-between gap-8 mt-2 flex-wrap">
          <Card bg={"#8272DA"} title={24} subtitle={"Salem"}></Card>
          <Card bg={"#FD6663"} title={"June 21"} subtitle={"12.00.07"}></Card>
          <Card bg={"#FCA201"} title={"Built using"} subtitle={"React"}></Card>
        </div>
        <Todo></Todo>


      </div>

    </div>
  );
}

export default App;
