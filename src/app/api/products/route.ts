import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.KICKSDB_API_KEY;
  
  const response = await fetch('https://api.kicksdb.com/v1/products', {
    headers: {
      'x-api-key': apiKey as string,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return NextResponse.json(data);
}
