var kClosest = function (points, k) {

    let distances = [];

    for (let point of points) {
        let [x, y] = point;
        let distance = Math.abs(Math.pow(x, 2) + Math.pow(y, 2))
        distances.push([distance, point])
    }

    distances.sort((a, b) => a[0] - b[0])

    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(distances[i][1])
    }

    return result;
};