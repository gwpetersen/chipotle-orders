
export enum ENTREE_TYPE {
    BURGER = 'Burger',
    HOTDOG = 'Hotdog',
    SALAD = 'Salad',
}
export enum SAUCE_TYPE {
    MILD = 'mild',
    MEDIUM = 'medium',
    HOT = 'hot',
}
export enum TOPPING_TYPE {
    CHEESE = 'cheese',
    LETTUCE = 'lettuce',
    VEGGIES = 'veggies',
}
export interface OrderOptions {
    entree?: ENTREE_TYPE;
    sauces?: SAUCE_TYPE[];
    toppings?: TOPPING_TYPE[];
}