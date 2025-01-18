import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilters);

  const filteredList = contacts.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {filteredList.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
