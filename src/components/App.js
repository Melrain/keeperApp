import './App.css';
import { contacts } from './contacts';
import { Card } from './Card';


function App() {

  const createCard = (contact) => {
    return <Card
      key={contact.id}
      thekey={contact.id}
      name={contact.name}
      img={contact.imgUrl}
      phone={contact.phone}
      email={contact.email} />
  }

  return (
    <div>
      <div className='App'>
        <h1>Contacts</h1>
      </div>
      {contacts.map(createCard)}
    </div>


  )

}

export default App;
