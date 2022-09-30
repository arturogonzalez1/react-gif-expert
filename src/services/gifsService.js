const apyKey = 'tmWF2QUNZ3CAKC12nzEk8PFcaVpSMDXu'

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?apiKey=${ apyKey }&q=${ category }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};