const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
        get appetizers() {
            return this._appetizers;
        },
        get mains() {
            return this._mains;
        },
        get desserts() {
            return this._desserts;
        },
        set appetizers(newAppetizers) {
            this._appetizers = newAppetizers;
        },
        set mains(newMains) {
            this._mains = newMains;
        },
        set desserts(newDesserts) {
            this._desserts = newDesserts;
        }
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('_appetizers');
        const main = this.getRandomDishFromCourse('_mains');
        const dessert = this.getRandomDishFromCourse('_desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is composed of ${appetizer.name}, ${main.name} and ${dessert.name} for a total price of ${totalPrice}.`;
    }

};

menu.addDishToCourse('_appetizers', 'Salad', 8);
menu.addDishToCourse('_appetizers', 'Eggs', 9);
menu.addDishToCourse('_appetizers', 'Paté', 6);

menu.addDishToCourse('_mains', 'Tartiflette', 18);
menu.addDishToCourse('_mains', 'Tbone', 19);
menu.addDishToCourse('_mains', 'Pizza', 16);

menu.addDishToCourse('_desserts', 'Creme brulée', 12);
menu.addDishToCourse('_desserts', 'Babarhum', 11);
menu.addDishToCourse('_desserts', 'Tarte tatin', 13);

const meal = menu.generateRandomMeal();
console.log(meal);
