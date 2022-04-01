import { useQuery } from 'react-query';
import axios from 'axios';

const fetchAllGenre = async () => {
    const { data } = await axios.get('https://mydarksitecollection.online/wp-json/kkk/v1/genres');
    return data;
};

const useAllGenre = () => useQuery('allgenre', fetchAllGenre);
export default useAllGenre;