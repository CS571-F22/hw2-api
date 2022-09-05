import { faker } from '@faker-js/faker';
import { BadgerBookAuthor } from './badger-book-author';

export class BadgerBook {

    private static readonly GENRES = ["MYSTERY", "THRILLER", "HORROR", "HISORICAL", "ROMANCE", "FANTASY", "DYSTOPIAN"]

    private name: string;
    private description: string;
    private genre: string;
    private price: number;
    private rating: number;
    private publisher: string;
    private author: BadgerBookAuthor;

    public constructor(name: string, description: string, genre: string, price: number, rating: number, publisher: string, author: BadgerBookAuthor) {
        this.name = name;
        this.description = description;
        this.genre = genre;
        this.price = price;
        this.rating = rating;
        this.publisher = publisher;
        this.author = author;
     }

    public static getRandomGenre(): string {
        return BadgerBook.GENRES[Math.floor(Math.random()*BadgerBook.GENRES.length)];
    }

    public static constructRandom(): BadgerBook {
        return new BadgerBook(
            faker.music.songName(),
            faker.lorem.paragraph(),
            BadgerBook.getRandomGenre(),
            parseFloat(faker.finance.amount(10, 99)),
            parseFloat(faker.finance.amount(1, 5)),
            faker.company.name(),
            BadgerBookAuthor.constructRandom()
        );
    }
}
