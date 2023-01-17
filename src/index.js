const towelSort = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }

    return matrix
        .map((row, index) => (index % 2 !== 0 ? row.reverse() : row))
        .flat();
};

module.exports = towelSort;
