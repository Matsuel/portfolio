import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {

    const { firstName, lastName, email, phone, message } = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: 'Mathéo Lang <no-reply@matheolang.fr>',
            to: [email],
            subject: 'Hello world',
            react: EmailTemplate({ firstName, lastName, email, phoneNumber: phone, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}