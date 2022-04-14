export const mapComicAttributes = (comicsData = [{}]) => {
  return comicsData.map((comic) => {
    const {
      id = '',
      description = '',
      title = '',
      thumbnail: { path: image = '', extension = '' } = {},
    } = comic;

    let year = '';
    let month = '';
    let day = '';
    let date = '';

    if (comic.dates !== undefined) {
      const { date: OldDate = '' } = comic.dates[0];

      year = OldDate.slice(0, 4);
      month = OldDate.slice(5, 7);
      day = OldDate.slice(8, 10);
      date = `${day}/${month}/${year}`;
    }

    let creators = [];

    if (comic.creators !== undefined) {
      const { items = [] } = comic.creators;
      creators = items;
    }

    if (image !== undefined && image.toLowerCase().includes('not_available')) {
      return;
    }

    return {
      id,
      description,
      title,
      image,
      extension,
      date: date,
      creators: creators,
    };
  });
};
