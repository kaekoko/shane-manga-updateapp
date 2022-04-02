import { useQuery } from 'react-query'
import axios from 'axios'

const fetchMangasByGenre = async ({ slug }) => {
  await new Promise((r) => setTimeout(r, 500))
  const { Mdata } = await axios.get('https://mydarksitecollection.online/wp-json/kkk/v1/manga/?genre=action')
  return Mdata
}

const useMangasByGenre = (slug) => useQuery(['mangaByGenre', slug], () => fetchMangasByGenre(slug))
export default useMangasByGenre
