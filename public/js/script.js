const addCards = (items) => {
    console.log(items);
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align"> <div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+ item.image +'"></img></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+ item.title +'<i class="material-icons right">more_vert</i></span><p><a href="#">About this kiiten</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span><p class="card-text">'+item.description+'</p></div></div></div>';
        $('#card-section').append(itemToAppend);
    });
}

const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();

    console.log('form data: ', formData);
    addCat(formData);
}
const getCats = () => {
    $.get('/api/cats', (res) => {
        if(res.statusCode === 200)
        {
            addCards(res.data);
        }
    });
}


const addCat = (cat) => {
    $.ajax({
        url: "api/cats",
        data: cat, 
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();

        }
    });
}
/*const cardList = [
    {
        title: 'Kitten 2', 
        image: 'images/kitten-2.png', 
        link: 'About Kitten 2', 
        description: 'Kitten 2 description'
    },
    {
        title: 'Kitten 3', 
        image: 'images/kitten-3.png', 
        link: 'About Kitten 3', 
        description: 'Kitten 3 description'
    }
];
*/



$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();

    getCats();


    //addCards(cardList);
    $('#formSubmit').click(()=>{
        submitForm();
    })
});
