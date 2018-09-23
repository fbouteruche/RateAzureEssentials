let apihost = process.env["API_HOST"]
let apiport = process.env["API_PORT"]
if(!apihost)
{
    
    apihost = 'localhost'
}
if(!apiport)
{
    apiport = '3000'
}
export const API_HOST = apihost;
export const API_PORT = apiport;