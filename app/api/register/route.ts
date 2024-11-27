import { NextResponse } from 'next/server';
import { addToSheet } from '@/lib/sheets';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const success = await addToSheet(email, password);
    
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to add to sheet' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}