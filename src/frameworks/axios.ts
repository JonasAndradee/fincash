import { AxiosHttpClient } from '../adapters/axios'
import { HttpRequest } from '../adapters/axios/http'

const baseUrl = 'https://fincash-api.herokuapp.com'

const axiosResquest = async (params: HttpRequest) => {
  const endpoint = `${baseUrl}/${params.url}`

  const response = await new AxiosHttpClient().request({ ...params, url: endpoint })

  return response
}

export default axiosResquest
