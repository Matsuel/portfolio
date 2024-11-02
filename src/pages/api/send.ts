import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { firstName, name, email, object, message } = req.body;
    console.log(req.body);

    const response = await fetch(process.env.DISCORD_WEBHOOK as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `Nouveau message de ${firstName} ${name}\nObjet: ${object}\nEmail: ${email}\nMessage: ${message}`,
        }),
    });

    if (response.ok) {
        res.status(200).json({ sent: true });
    } else {
        res.status(500).json({ sent: false });
    }
};
