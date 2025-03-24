import { EmbedBuilder, WebhookClient } from "discord.js";

class Webhook {
    private client: WebhookClient | null;

    constructor(url: string) {
        try {
            this.client = new WebhookClient({ url });
        } catch {
            this.client = null;
        }
    }

    private buildEmbed(name: string, firstname: string, email: string, message: string): EmbedBuilder {
        if (!name || !firstname || !email || !message) {
            throw new Error('Missing parameters');
        }
        return new EmbedBuilder()
            .setTitle('Nouveau message')
            .addFields(
                {
                    name: 'Nom',
                    value: name,
                    inline: true,
                },
                {
                    name: 'Prénom',
                    value: firstname,
                    inline: true,
                },
                {
                    name: 'Email',
                    value: email,
                    inline: true,
                },
                {
                    name: 'Message',
                    value: message,
                    inline: false,
                }
            )
            .setTimestamp()
            .setAuthor({
                name: 'Portfolio',
            })
            .setColor('Aqua');
    }

    async sendMessage(name: string, firstname: string, email: string, message: string): Promise<void> {
        if (!this.client) {
            return;
        }
        const embed = this.buildEmbed(name, firstname, email, message);
        await this.client.send({ embeds: [embed] });
    }
}

export const webhook = new Webhook(process.env.WEBHOOK_URL as string);