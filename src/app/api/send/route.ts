import { webhook } from '@/utils/webhook';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
    if (!request.body) {
        return NextResponse.json({ message: 'No body provided' }, { status: 400 });
    }

    const body = await request.json();
    const { name, firstname, email, message } = body;

    if (!name || !firstname || !email || !message) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    webhook.sendMessage(name, firstname, email, message);

    return NextResponse.json({ message: 'Message sent' });
}