import Greeting from "./components/Greeting";
import JSXRules from "./components/JSXRules";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      {/* Here are some important JSX Rules to keep in mind:
       <JSXRules/>
      */}

      {/*  Dynamic Rendering of Components   :   
      <Greeting/>
      <ProductInfo/> 
      */}
      <h1>User List Component</h1>
      <UserList />
    </div>
  );
};
export default App;
