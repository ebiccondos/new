const onAPIResponse=async(response)=>{if(!response.ok)throw new Error(await response.text());const json=await response.json()
if(typeof json.success!=="undefined"&&!json.success)throw new Error(json.message);return json}
const getCondoMaps=()=>fetch(`https://condogames.xyz/api//uploads/maps`).then(onAPIResponse)
