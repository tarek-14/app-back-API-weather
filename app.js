const forecast = require("./data/forecast")
const geocode = require("./data/geocode")

const country = process.argv[2]
geocode(country, (error , data) =>{
    console.log("error : " ,error)
    console.log("data :" , data  )

    forecast(data.latitude , data.longtitude , (error , data) =>{
        console.log("error : " ,error)
        console.log("data :" , data  )
    
    })
})
