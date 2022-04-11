import { rest } from 'msw';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Rick Sanchez' },
        { id: 2, name: 'Morty Smith' },
      ])
    );
  }),
];
