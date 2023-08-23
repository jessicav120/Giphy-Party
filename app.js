console.log("Let's get this party started!");

const $form = $('#searchForm');
const $gifContainer = $('#gifContainer');

async function searchGif(tag){
    const res = await axios.get('https://api.giphy.com/v1/gifs/random',{
        params: {
            tag,
            api_key: 'ICga3jIDCRRhw2sqe8sP5O6EFzz3mGf5'
        }
    });
    appendGif(res.data.data); 
}

function appendGif(result){
    let $newImg = $('<img>', {src: result.images.fixed_width.url});
    $gifContainer.append($newImg);
}

$form.on('submit', function(e){
    e.preventDefault();
    const searchTerm = document.querySelector('#search').value;
    searchGif(searchTerm);
    $('#search').val("");
})

$("#clear").on('click', function(){
    $gifContainer.empty();
})
