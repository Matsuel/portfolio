import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Mathéo Lang <no-reply@matheolang.fr>',
            to: ['matheolang@icloud.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '123-456-7890', message: 'This is a test message.' }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}