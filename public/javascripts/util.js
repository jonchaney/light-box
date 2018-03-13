const parseResults = (data) => {
    let images = [];

    data.forEach((item) => {
        images.push(
            {
                title: item.title,
                imageUrl: item.link,
            }
        )
    });
    return images;
};

module.exports = parseResults;