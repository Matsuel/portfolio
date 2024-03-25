import React from 'react';

import styles from './Contact.module.scss';
import Title from '@/Components/Title/Title';
import EmojiPicker, { Emoji } from 'emoji-picker-react';
import Button from '@/Components/Button/Button';

interface ContactProps {

}

const Contact = ({ }: ContactProps) => {
    return (
        <div className={styles.Contact_container}>
            <div className={styles.Contact_top}>
                <Title content="Contact" />
                <Emoji unified="1f4f1" size={70} />
            </div>

            <div className={styles.Contact}>
                <form className={styles.Contact_form}>
                    <h2 className={styles.Contact_title}>
                        Say Hello
                        <Emoji
                            unified="1f44b"
                            size={30}
                        />
                    </h2>
                    <div className={styles.Contact_info}>
                        <input
                            type="text"
                            placeholder="Name"
                            className={styles.Contact_input}
                        />
                        <input
                            type="text"
                            placeholder="First Name"
                            className={styles.Contact_input}
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className={styles.Contact_input}
                    />
                    <textarea
                        placeholder="Message"
                        required
                        className={styles.Contact_input + " " + styles.Contact_area}
                    ></textarea>
                    <button
                        type='submit'
                        className={styles.Contact_button}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
