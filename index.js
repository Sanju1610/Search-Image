 const accessKey = "TE28FSVKfdJTVzuYUEIGtMrNpiJIIv6onBfIX9ufGdM";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");


let keyWord = "";
let page = 1;
async function searchImages()
{
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
   console.log(data);

   const results = data.results;
   results.map((result) =>{
     const image = document.createElement("img");
     image.src = result.urls.small;
     const imageLink = document.createElement("a");
     imageLink.href = result.links.html;
     imageLink.target = "_blank"
     imageLink.appendChild(image);
     searchResult.appendChild(imageLink);
   })
   searchMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit",(e) =>{
  e.preventDefault();
    page = 1;
     searchImages();
});

searchMoreBtn.addEventListener("click",()=>{
   page++;
   searchImages();
})
