import { Hero } from './../heroes.interface';
export let HEROES: Hero[] = [
    {
        "id": 1,
        "superhero": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "characters": "Bruce Wayne",
        "comments":["Just a rich kid","awesome !!"]
    },
    {
        "id": 2,
        "superhero": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "characters": "Kal-El",
        "comments":[]
    },
    {
        "id": 3,
        "superhero": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen",
        "comments":[]
    },
    {
        "id": 4,
        "superhero": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "characters": "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
        "comments":[]
    },
    {
        "id": 5,
        "superhero": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "More Fun Comics #73",
        "characters": "Oliver Queen",
        "comments":[]
    },
    {
        "id": 6,
        "superhero": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "All Star Comics #8",
        "characters": "Princess Diana",
        "comments":[]
    },
    {
        "id": 7,
        "superhero": "Martian Manhunter",
        "publisher": "DC Comics",
        "alter_ego": "J'onn J'onzz",
        "first_appearance": "Detective Comics #225",
        "characters": "Martian Manhunter",
        "comments":[]
    },
    {
        "id": 8,
        "superhero": "Robin/Nightwing",
        "publisher": "DC Comics",
        "alter_ego": "Dick Grayson",
        "first_appearance": "Detective Comics #38",
        "characters": "Dick Grayson",
        "comments":[]
    },
    {
        "id": 9,
        "superhero": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "characters": "Dan Garret, Ted Kord, Jaime Reyes",
        "comments":[]
    },
    {
        "id": 10,
        "superhero": "Black Canary",
        "publisher": "DC Comics",
        "alter_ego": "Dinah Drake",
        "first_appearance": "Flash Comics #86",
        "characters": "Dinah Drake, Dinah Lance",
        "comments":[]
    },
    {
        "id": 11,
        "superhero": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "characters": "Peter Parker",
        "comments":[]
    },
    {
        "id": 12,
        "superhero": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "characters": "Steve Rogers",
        "comments":[]
    },
    {
        "id": 13,
        "superhero": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "characters": "Tony Stark",
        "comments":[]
    },
    {
        "id": 14,
        "superhero": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "characters": "Thor Odinson",
        "comments":[]
    },
    {
        "id": 15,
        "superhero": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "characters": "Bruce Banner",
        "comments":[]
    },
    {
        "id": 16,
        "superhero": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "characters": "James Howlett",
        "comments":[]
    },
    {
        "id": 17,
        "superhero": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "characters": "Matthew Michael Murdock",
        "comments":[]
    },
    {
        "id": 18,
        "superhero": "Hawkeye",
        "publisher": "Marvel Comics",
        "alter_ego": "Clinton Francis Barton",
        "first_appearance": "Tales of Suspense #57",
        "characters": "Clinton Francis Barton",
        "comments":[]
    },
    {
        "id": 19,
        "superhero": "Cyclops",
        "publisher": "Marvel Comics",
        "alter_ego": "Scott Summers",
        "first_appearance": "X-Men #1",
        "characters": "Scott Summers",
        "comments":[]
    },
    {
        "id": 20,
        "superhero": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "characters": "Norrin Radd",
        "comments":[]
    }
];
export function changeComment(id:number,comment:string){
    HEROES[id].comments.push(comment);
}