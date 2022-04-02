import { useQuery } from 'react-query'
import axios from 'axios'

const fetchLatestMangas = async () => {
  await new Promise((r) => setTimeout(r, 500))
  const { data } = await axios.get('https://mydarksitecollection.online/wp-json/kkk/v1/latestmangas')
  return data
}

const useLatestMangas = () => useQuery('LatestMangas', fetchLatestMangas)
export default useLatestMangas
