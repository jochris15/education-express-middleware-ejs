class Game {
    constructor(id, name, gameImg, releaseDate, developer, genre) {
        this.id = id;
        this.name = name;
        this.gameImg = gameImg;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.genre = genre;
    }

    get formattedReleaseDate() {
        const date = new Date(this.releaseDate)
        return date.toISOString().split('T')[0]
    }
}

module.exports = Game;