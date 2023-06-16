import axios from "axios"
import { useLocalStorage } from "../../hooks/localStorage"
import { prefix } from '../rest-client'

export const useClient = (collection) => {
     const prefix = 'nurima'
    const [creds] = useLocalStorage('credential')
    const client = axios.create({
        baseURL: `https://msib-feb3-objectstorage.productzillaacademy.com/collections/${prefix}_${collection}`,
        headers: {
            Authorization: `Bearer ${creds}`
        }
    })

    return client;
}

export default useClient