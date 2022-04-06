export const mapComicAttributes = (comicsData = [{}], loading) => {
  return comicsData.map((comic) => {
    const { title = "", thumbnail: { path: image, extension } = {} } = comic;

    return {
      title,
      image,
      extension,
    };
  });
};
