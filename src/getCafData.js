const fs = require('fs')
const axios = require('axios')

function getCafData() {
    axios.get("https://legacy.cafebonappetit.com/api/2/menus?cafe=261")
    .then(res => loadResToCafData(res.data))
}

function loadResToCafData(data) {    
    fs.writeFile("cafData.json", JSON.stringify([data], null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
}

getCafData()




