export const mapComicAttributes = (comicsData = [{}], loading) => {
  return comicsData.map((comic) => {
    const {
      id = null,
      title = "",
      thumbnail: { path: image, extension } = {},
    } = comic;

    return {
      id,
      title,
      image,
      extension,
    };
  });
};
