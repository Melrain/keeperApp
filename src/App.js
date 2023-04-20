import './App.css';
import { Contacts } from './Contacts';
import { User } from './User';


function App() {


  return (
    <div>
      <div className='container App'>
        <h1 className='title'>My Contacts</h1>
      </div>
      <div>
      <User name={Contacts[0].name} url={Contacts[0].imgUrl} phone={Contacts[0].phone} email={Contacts[0].email}/>
      </div>
      <div>
      <User name={Contacts[1].name} url={Contacts[1].imgUrl} phone={Contacts[1].phone} email={Contacts[1].email}/>
      </div>
      <div>
      <User name={Contacts[2].name} url={Contacts[2].imgUrl} phone={Contacts[2].phone} email={Contacts[2].email}/>
      </div>
    </div>

  )

}

export default App;
