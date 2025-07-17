import { NextRequest } from 'next/server';
import { menu } from '../../../data/data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const food = menu.find(
    (item: { id: number }) => item.id.toString() === params.id
  );

  if (!food) {
    return new Response(JSON.stringify({ error: 'Item não encontrado' }), {
      status: 404,
    });
  }

  return Response.json(food);
}
