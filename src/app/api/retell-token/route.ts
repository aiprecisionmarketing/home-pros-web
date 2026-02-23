import { NextRequest, NextResponse } from 'next/server';

const RETELL_API_KEY = process.env.RETELL_API_KEY;
const RETELL_AGENT_ID = process.env.RETELL_AGENT_ID;

export async function POST(request: NextRequest) {
  try {
    if (!RETELL_API_KEY || !RETELL_AGENT_ID) {
      return NextResponse.json(
        { error: 'Missing Retell API configuration' },
        { status: 500 }
      );
    }

    // Create web call with Retell API
    const response = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: RETELL_AGENT_ID,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Retell API error:', errorData);
      return NextResponse.json(
        { error: errorData.message || 'Failed to create web call' },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      accessToken: data.access_token,
      callId: data.call_id,
    });
  } catch (error: any) {
    console.error('Error creating Retell web call:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
