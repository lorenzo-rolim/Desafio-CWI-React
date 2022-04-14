import { rest } from 'msw';

export const handlers = [
  rest.get(
    `https://gateway.marvel.com/v1/public/comics`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            results: [
              {
                id: 1,
                title: 'titulo teste1',
                description: 'Descrição Top1',
                thumbnail: {
                  path: 'www.testedeurl.com1',
                  extension: 'jpg1',
                },
                dates: [{ date: '2002-12-27' }],
                creators: {
                  items: [{ name: 'Lorenzo1' }, { name: 'Henrique1' }],
                },
              },
              {
                id: 2,
                title: 'titulo teste2',
                description: 'Descrição Top2',
                thumbnail: {
                  path: 'www.testedeurl.com2',
                  extension: 'jpg2',
                },
                dates: [{ date: '2002-12-27' }],
                creators: {
                  items: [{ name: 'Lorenzo2' }, { name: 'Henrique2' }],
                },
              },
            ],
          },
        }),
      );
    },
  ),
];
