import { mapComicAttributes } from './map-comic-attributes';

describe('map-data', () => {
  it('Should map data even if there is no data', () => {
    const pagesData = mapComicAttributes()[0];

    expect(pagesData.id).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.description).toBe('');
    expect(pagesData.image).toBe('');
    expect(pagesData.extension).toBe('');
    expect(pagesData.date).toBe('');
    expect(pagesData.creators).toEqual([]);
  });

  it('Should map data even if there are data', () => {
    const pagesData = mapComicAttributes([
      {
        id: 1,
        title: 'titulo teste',
        description: 'Descrição Top',
        thumbnail: {
          path: 'www.testedeurl.com',
          extension: 'jpg',
        },
        dates: [{ date: '2002-12-27' }],
        creators: { items: [{ name: 'Lorenzo' }, { name: 'Henrique' }] },
      },
    ])[0];

    expect(pagesData.id).toBe(1);
    expect(pagesData.title).toBe('titulo teste');
    expect(pagesData.description).toBe('Descrição Top');
    expect(pagesData.image).toBe('www.testedeurl.com');
    expect(pagesData.extension).toBe('jpg');
    expect(pagesData.date).toBe('27/12/2002');
    expect(pagesData.creators).toEqual([
      { name: 'Lorenzo' },
      { name: 'Henrique' },
    ]);
  });
});
