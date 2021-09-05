
import Init from "./Components/Init";
import StateProvider from "./context/StateProvider";


function App() {
  
  return (
    <>
    <StateProvider>
     
    <Init/>

    </StateProvider>
    </>
  );
}

export default App;
