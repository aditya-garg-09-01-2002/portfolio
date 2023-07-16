const myLibrary=[
    {
        name:"High School DxD",
        category:"Anime",
        image:"https://wallpapers.com/images/featured-full/highschool-dxd-pictures-pge49ca9u45d8ot5.jpg",
        monologue:"Oppai-Dragon"
    },
]
function addLibrary()
{
    var container=document.getElementById('scrollBar');
    var category_container,placard,image,outer_bar_container
    myLibrary.forEach(addItems);
    function addItems(element)
    {
        var category=document.getElementById(element.category);
        if(category === null)
        {
            (function(){
                var title=document.createElement('div');
                title.classList.add('sectionTitle');
                title.innerText=element.category;
                container.appendChild(title);
            })();
            (function(){
                outer_bar_container=document.createElement('div');
                outer_bar_container.classList.add("barContainer");
                container.appendChild(outer_bar_container);
            })();
            (function(){
                category=document.createElement('div');
                category.classList.add('bar');
                category.id=element.category;
                outer_bar_container.appendChild(category);
            })();
        }   
        (function(){
            placard=document.createElement('div');
            placard.classList.add('placardEntertainment');
            category.appendChild(placard);
        })();
        (function(){
            image=document.createElement('img');
            image.src=element.image;
            placard.appendChild(image);
        })();
        (function(){
            text=document.createElement('div');
            placard.appendChild(text);
            text.innerText=element.monologue;
        })();
    }                
};