export default (data) => {
    return data.sort((a, b) =>
        (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
};
