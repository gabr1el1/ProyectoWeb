const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let articles = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = articles.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.category.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {


        
        articles = [{"name":"Some and any","category":"grammar","image":"./articulos/articulosAssets/some_any.jpg","dest":"#"},

        {"name":"Phrasal verbs","category":"grammar","image":"./articulos/articulosAssets/phrasal_verbs.jpg","dest":"#"},
        
        {"name":"Simple past","category":"grammar","image":"./articulos/articulosAssets/simple_past.jpg","dest":"#"},
        
        {"name":"How to improve your listening","category":"tips","image":"./articulos/articulosAssets/listening.jpg","dest":"#"},
        
        {"name":"How to expand your vocabulary","category":"tips","image":"./articulos/articulosAssets/vocabulary.jpg","dest":"#"},
        
        {"name":"Books and movies recommendations","category":"tips","image":"./articulos/articulosAssets/book_movies.jpg","dest":"#"}

        ]


        displayCharacters(articles);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <a href=${character.dest}><h2>${character.name}</h2></a>
                <p>Category: ${character.category}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();




