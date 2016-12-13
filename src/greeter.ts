export default class Greeter implements GreetInDanish, GreetInEndlish{

    danishGreet(greeting: DanishGreeting) {
        return greeting;
    }

    englishGreet(greeting: EnglishGreeting) {
        return greeting;
    }

}

type DanishGreeting = 'Hej' | 'Hejsa' | 'Goddag';
type EnglishGreeting = 'Hi' | 'Hello' | 'Evening mate';

interface GreetInDanish {
    danishGreet(greeting: DanishGreeting);
}

interface GreetInEndlish {
    englishGreet(greeting: EnglishGreeting);
}