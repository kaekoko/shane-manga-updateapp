import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSingleManga = async (mangaId) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?mangaId=${mangaId}`);
    return data;
};

const useSingleManga = (mangaId) => useQuery([ 'singleManga', mangaId ], () => fetchSingleManga(mangaId));
export default useSingleManga;
