
// You should implement your task here.

module.exports = function towelSort(matrix) {
    return Array.isArray(matrix) && matrix.length ?
        matrix.reduce((acc, current, index) => {
            const sortArray = (index + 1) % 2 !== 0 ? current.sort((a, b) => a - b) : current.sort((a, b) => b - a);
            return acc.concat(sortArray);
        }) : [];
}
