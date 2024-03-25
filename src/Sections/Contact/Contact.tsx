import React from 'react';

import styles from './Contact.module.scss';
import Title from '@/Components/Title/Title';
import { Emoji } from 'emoji-picker-react';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string;
    firstName: string;
    email: string;
    message: string;
};

interface ContactProps {

}

const Contact = ({ }: ContactProps) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div className={styles.Contact_container}>
            <div className={styles.Contact_top}>
                <Title content="Contact" />
                <Emoji unified="1f4f1" size={70} />
            </div>

            <div className={styles.Contact}>
                <form className={styles.Contact_form} onSubmit={handleSubmit(onSubmit)}>
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
                            {...register("name", { required: false })}
                        />
                        <input
                            type="text"
                            placeholder="First Name"
                            className={styles.Contact_input}
                            {...register("firstName", { required: false })}
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className={styles.Contact_input}
                        {...register("email", { required: true })}
                    />
                    <textarea
                        placeholder="Message"
                        required
                        className={styles.Contact_input + " " + styles.Contact_area}
                        {...register("message", { required: true })}
                    ></textarea>
                    <div className={styles.Contact_buttons}>
                    <button
                        type='submit'
                        className={styles.Contact_button}
                    >
                        Send
                    </button>

                    <button
                        type='reset'
                        className={styles.Contact_button}
                    >
                        Reset
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
