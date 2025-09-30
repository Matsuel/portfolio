import React from "react";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    message: string;
}

export function EmailTemplate({ firstName, lastName, email, phoneNumber, message }: EmailTemplateProps) {
    return (
        <div>
            <h1>Bonjour, {firstName} {lastName}!</h1>
            <p>Email: {email}</p>
            {phoneNumber && <p>Phone Number: {phoneNumber}</p>}
            <p>Message: {message}</p>
            <p>Merci de m&apos;avoir contacté! Je vous recontacterai sous peu.</p>
        </div>
    );
}