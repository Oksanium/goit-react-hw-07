import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const list = useSelector(selectContacts);
  const query = useSelector(selectFilter);

  function renderList(contact) {
    return <ContactItem contact={contact} key={contact.id} id={contact.id} />;
  }

  console.log(list);

  return (
    <div className={s.list}>
      {list
        .filter((elem) => {
          return elem.name.toLowerCase().includes(query);
        })
        .map(renderList)}
    </div>
  );
}
