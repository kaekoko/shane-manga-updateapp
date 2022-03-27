import { useQuery } from 'react-query';
import axios from 'axios';

const fetchLatestMangas = async () => {
    const { data } = await axios.get('https://mydarksitecollection.online/wp-json/kkk/v1/latestmangas');
    return data;
};

const useLatestMangas = () => useQuery('LatestMangas', fetchLatestMangas);
export default useLatestMangas;