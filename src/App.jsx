import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className="wrapper">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <div>
        {contacts.length === 0 ? (
          <div className="addContact">
            <p>Your phonebook is empty.</p>
            <p>Please add your first contact to the phonebook!</p>
          </div>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
}

export default App;
