import axios from "./axios-config";

/* || Q1

axios.get("/articles").then(({data}) => {
    console.log(data.data);
})

*/

// || Q2

// axios.post("/articles", {
//     "title": "AJAX",
//     "content": "my first AJAX post request",
//     "tags": ["motivational"]
// }).then(({data}) => {
//     console.log(data.data.id);
// });

// || Q3 Fetch one of your articles from the API and console.log()

// axios.get("/articles/85").then(({data}) => {
//     console.log(data.data);
// });

// || Q4 Add a new tag to one of your articles and console.log() the tags array from the response:
//
// axios.patch("/articles/85",{
//         tags: ["motivational", "DevelopMe_"],
//     }).then(({data}) =>{
//         console.log(data.data.tags);
//     });

// || Q5 Delete an article and console.log() "Deleted" once you get back a response
//
// axios.delete("/articles/85").then((response) => {
//     console.log(response);
// })

