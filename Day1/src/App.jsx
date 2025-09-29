import Greeting from "./components/Greeting";
import JSXRules from "./components/JSXRules";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
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

      {/* <h1>User List Component</h1>
      <UserList />
      <ProductList/>  */}

      <Person name = "Roshan Pandit" age = "23"/>
      
      <Product name = "Iphone 17 Pro Max" price = "1,67,777"></Product>
     
    </div>
  );
};
export default App;
