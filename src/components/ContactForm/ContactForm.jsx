import React, { Component } from 'react';
import css from './ContactForm.module.css';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    formChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    formSubmit = e => {
        e.preventDefault();
        this.props.addContacts(this.state);
        e.currentTarget.reset();
    };

    render() {
        return (
            <div >
                <form onSubmit={this.formSubmit}>
                    <p className={css.title}>Name</p>
                    <input
                        className={css.input}
                        placeholder="Jacob Mercer"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.formChange}
                    />
                    <p className={css.title}>Number</p>
                    <input
                        className={css.input}
                        placeholder="257-42-21"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.formChange}
                    />
                    <button type="submit" className={css.btnSubmit}>
                        Add contact
                    </button>
                </form>
            </div>
        );
    }
}
export default ContactForm;