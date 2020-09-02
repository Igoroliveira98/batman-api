async function getHero() {
    try {
        const response = await fetch("http://localhost:4567/");

        let hero = await response.json();

        console.log(hero);

    } catch(error) {
        console.error(error)
    }

}

getHero();