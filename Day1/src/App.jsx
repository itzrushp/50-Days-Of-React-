import ConditionalGreet from "./components/ConditionalGreet";
import Greeting from "./components/Greeting";
import JSXRules from "./components/JSXRules";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import Temperature from "./components/Temperature";
import UserList from "./components/UserList";
import UseStatus from "./components/UseStatus";

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

      {/* using Props to pass data to components ,also you can pass in the children as props too ! 
      <Person name = "Roshan Pandit" age = "23"/>
      
      <Product name = "Iphone 17 Pro Max" price = "1,67,777"></Product> */}

      {/* Now here I am trying to use props and conditional Rendering  */}
      <h1>Conditional Rendering</h1>
      <Temperature temperature={30}/>
      <UseStatus loggedIn={true} IsAdmin={false}/>
      <ConditionalGreet timeofDay={'morning'}/>

    </div>
  );
};
export default App;
