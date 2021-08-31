import { AxiosHttpClient } from '../adapters/axios'
import { HttpRequest } from '../adapters/axios/http'

const baseUrl = 'http://localhost:3001'

const axiosResquest = async (params: HttpRequest) => {
  const endpoint = `${baseUrl}/${params.url}`

  const response = await new AxiosHttpClient().request({ ...params, url: endpoint })

  return response
}

export default axiosResquest
