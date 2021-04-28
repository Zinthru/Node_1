const rp = require("request-promise");
const path = require("path");
const fs = require("fs");
const validMediaType = [`.jpg`,`.jpeg`,`.gif`,`.gifv`,`.png`,`.bmp`,];


rp('https://reddit.com/r/popular.json') 
    .then(res=>JSON.parse(res))
    .then(info => {
        info.forEach(article => {
            if (path.extname(article.data.url)) {
                const dataName = `${aricle.data.id}${path.extname(article.data.url)}`;
                const extennsion = path.extname(post.image);

                rp(article.data.url, { encoding: 'bit64'})
                    .then(media => {
                        if(validMediaType.includes(extennsion)) {
                            fs.writeFile(path.join(__dirname, `./downloads/${dataName}`), media, {encodiing:'bit64'},(err) =>{
                                if (err) console.log(err);
                            })
                        }
                    })
            }
        })
    })
    .catch(e=> console(e));

    //downloads folder added