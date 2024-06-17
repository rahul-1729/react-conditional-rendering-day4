import UserGreeting from "./UserGreeting.jsx"

 
function App() {
    
  return(
    <>
    <UserGreeting isLoggedIn ={true} username="Tekken"/>

    <UserGreeting/>
    </>
   
  );
}

export default App
