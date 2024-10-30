import { getQuery, readBody } from 'h3';
export default defineEventHandler(async (event)=>{
    // const { name } = getQuery(event)
    // const { age } = await readBody(event)
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_arg5c3ew5DWufaPCugZ6VIPxTsWtn2itRDKbVgdK')
    return data
})