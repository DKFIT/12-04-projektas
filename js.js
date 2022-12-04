
const get = async () => {
    //gauti duomenis is api
    try {
        let res = await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=n6AGU4aTDBA0AvzMfokFrPlksa1TY8Tn")
        let data = await res.json();
        console.log(data);
        // console.log(data.results);
        // console.log(data.results[0]);
        const articles = ['all'];
        const my_main_div = document.getElementById('maindiv');


        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].section);
            if (!articles.includes(data.results[i].section))
                articles.push(data.results[i].section);


            //kurti div kiekvienam article
            const one_arcitcle_info = document.createElement('div');
            one_arcitcle_info.className = 'card'

            //ideti img
            const article_pic = document.createElement('img')
            article_pic.src = data.results[i].multimedia[1].url
            one_arcitcle_info.appendChild(article_pic);
            // ideti tema
            const article_section = document.createElement('h4')
            article_section.innerText = data.results[i].section;
            one_arcitcle_info.appendChild(article_section);

            // //ideti kiekva article
            const article_title = document.createElement('h5');
            article_title.innerText = data.results[i].title;

            one_arcitcle_info.appendChild(article_title);
            // ideti read more
            let article_read = document.createElement('button');
            article_read.innerText = "Read more"
            article_read.className = 'abutton'

            article_read.addEventListener("click", function () {
                document.location.href = data.results[i].short_url;
            });
            one_arcitcle_info.appendChild(article_read)

            // //sudeti viska i div
            my_main_div.appendChild(one_arcitcle_info);
        }
        const article_buttons = document.querySelector('header');

        console.log(articles)

        articles.forEach(articles => {
            const menuButton = document.createElement('button');
            menuButton.innerText = articles;
            menuButton.className = "menub"
            article_buttons.appendChild(menuButton);

        })
        const navbuttons = document.getElementsByClassName('menub');
        const card_art = document.getElementsByTagName('h4');

        for (let one_category of navbuttons) {

            one_category.addEventListener('click',
                () => { getart(one_category.innerText) })
        }
        console.log(articles)
        const getart = (articles) => {
            
            for (let item of card_art) {
                if (item.innerText === articles || articles === 'all') {
                    item.parentElement.style.display = "block";
                    
                }
                else {
                    item.parentElement.style.display = "none"
                    
                }
            }
        }

    }
    catch (error) {
        console.log(error);
    }
};
console.log(get());

