export const mapComicAttributes = (comicsData = [{}], loading) => {
  return comicsData.map((comic) => {
    const {
      id = null,
      description = '',
      title = '',
      thumbnail: { path: image, extension } = {},
    } = comic;

    const { date: OldDate = '' } = comic.dates[0];

    const { items: creators = [] } = comic.creators;

    let year = OldDate.slice(0, 4);
    let month = OldDate.slice(5, 7);
    let day = OldDate.slice(8, 10);

    let date = `${day}/${month}/${year}`;

    return {
      id,
      title,
      image,
      extension,
      date,
      description,
      creators,
    };
  });
};
