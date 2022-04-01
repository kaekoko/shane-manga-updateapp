import { useQuery } from 'react-query';
import axios from 'axios';

const fetchMangasByGenre = async (slug) => {
    const { data } = await axios.get(`https://mydarksitecollection.online/wp-json/kkk/v1/manga/?genre=${slug}`);
    return data;
};

const useMangasByGenre = (slug) => useQuery([ 'MangaByGenre', slug ], () => fetchMangasByGenre(slug));
export default useMangasByGenre;
