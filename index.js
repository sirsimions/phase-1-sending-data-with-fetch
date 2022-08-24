/*function submitData(name,email){
    return fetch("http://localhost:3000/users", 
    {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({name: "Steve", email: "steve@steve.com"})
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        const div = document.createElement("div")
        p.innerHTML = data.id
        document.body.appendChild(div)
    })
    .catch(function(error){
        const p = document.createElement("p")
        p.innerHTML = error
     document.body.appendChild(p)
    })
    }*/

    