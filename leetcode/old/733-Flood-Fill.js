var floodFill = function (image, sr, sc, color) {
  const currentColor = image[sr][sc];
  if (currentColor === color) return image;

  const imageRows = image.length;
  const imageColumns = image[0].length;
  let touchedPoints = {};
  const getPointsAroundCoords = (sr1, sc1) => {
    const topPointCoords = [sr1 - 1, sc1];
    const rightPointCoords = [sr1, sc1 + 1];
    const bottomPointCoords = [sr1 + 1, sc1];
    const leftPointCoords = [sr1, sc - 1];

    return [
      topPointCoords,
      rightPointCoords,
      bottomPointCoords,
      leftPointCoords,
    ].filter(
      (coord) =>
        coord[0] >= 0 &&
        coord[0] < imageRows &&
        coord[1] >= 0 &&
        coord[1] < imageColumns &&
        !touchedPoints[`${coord[0]}-${coord[1]}`] &&
        currentColor === image[coord[0]][coord[1]]
    );
  };

  let fill = (image, sr, sc, color, currentColor) => {
    if (currentColor !== color) {
      image[sr][sc] = color;
      touchedPoints[`${sr}-${sc}`] = true;
    } else return;

    const pointsAround = getPointsAroundCoords(sr, sc);
    pointsAround.forEach((coords) =>
      fill(image, coords[0], coords[1], color, currentColor)
    );
  };

  fill(image, sr, sc, color, currentColor);

  return image;
};
