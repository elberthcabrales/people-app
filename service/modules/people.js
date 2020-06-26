module.exports = ({ axios, redis}) => ({
    get: async (req, res) => { 
        const {get, set} = redis;        
        const value = await get("salesloftApi")
        if(value){
            return res.status(200).send(value)
        }
        const {data: data} = await axios.get(
            "/people.json"
        )
        if(data){
            data.data.forEach(({id, first_name, last_name, full_email_address, title},i) =>{
                email = full_email_address
                email = email.substring(email.indexOf('<')+1, email.length-1);
                data.data[i] = {id:id,
                    name: first_name + " " + last_name,
                    email: email,
                    job: title
                }
            })
            await set("salesloftApi", data.data)
            return res.status(200).send(data.data)
        }
        res.status(400)
    }
})