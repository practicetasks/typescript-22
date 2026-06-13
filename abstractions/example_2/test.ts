


class Delta {}

// функционал полета
interface Flyable {
    fly(): void
}

interface Hunter {
    hunt(): void
}

class Eagle implements Flyable, Hunter {
    fly(): void {
        console.log('Eagle is flying....')
    }

    hunt() {
        console.log('Eagle is hunting....')
    }
}

class Bug implements Flyable {
    fly(): void {
        console.log('Bug is flying....')
    }
}

class Plane implements Flyable {
    fly(): void {
        console.log('Plane is flying....')
    }
}


