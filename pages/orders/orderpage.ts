import { Locator, Page } from "playwright-core";
import { ENTREE_TYPE, OrderOptions, SAUCE_TYPE, TOPPING_TYPE } from "../types"
import { expect } from "@playwright/test";

export class OrderPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async addEntree(entre: ENTREE_TYPE) {
        // going to assume we have data test ids to work with
        const entreeDataTestIds = [
            { type: ENTREE_TYPE.BURGER, id: 'burger-test-id' },
            { type: ENTREE_TYPE.HOTDOG, id: 'hotdog-test-id' },
            { type: ENTREE_TYPE.SALAD, id: 'salad-test-id' }
        ]
        const findId = entreeDataTestIds.find(({ type }) => type === entre)
        expect(findId.id, `unable to find selector for entree ${entre}`).toBeTruthy();
        if (findId.id) {
            // going to assume to add an entree you would simply click it
            await this.page.getByTestId(findId.id).click()
        }
    }

    async addSauce(sauce: SAUCE_TYPE) {
        const sauceTestIds = [
            { type: SAUCE_TYPE.HOT, id: 'hot-test-id' },
            { type: SAUCE_TYPE.MEDIUM, id: 'medium-test-id' },
            { type: SAUCE_TYPE.MILD, id: 'mild-test-id' }
        ]
        const findId = sauceTestIds.find(({ type }) => type === sauce)
        expect(findId.id, `unable to find selector defined for sauce ${sauce}`).toBeTruthy();
        if (findId.id) {
            await this.page.getByTestId('sauce-test-id').click()
        }
    }

    async addTopping(topping: TOPPING_TYPE) {
        const toppingTestIds = [
            { type: TOPPING_TYPE.CHEESE, id: 'cheese-test-id' },
            { type: TOPPING_TYPE.LETTUCE, id: 'lettuce-test-id' },
            { type: TOPPING_TYPE.VEGGIES, id: 'veggies-test-id' }
        ]
        const findId = toppingTestIds.find(({ type }) => type === topping)
        expect(findId.id, `unable to find selector defined for topping ${topping}`).toBeTruthy();
        if (findId.id) {
            await this.page.getByTestId(findId.id).click()
        }
    }

    async finishOrder() {
        this.page.getByTestId('finish-order-button-id').click();
    }

    async addOrderItems(orderDetails: OrderOptions[]) {
        for (const order of orderDetails) {
            if (order.entree) {
                this.addEntree(order.entree)
            }
            if (order.sauces && order.sauces.length > 0) {
                for (const sauce of order.sauces) {
                    this.addSauce(sauce)
                }
            }
            if (order.toppings && order.toppings.length > 0) {
                for (const topping of order.toppings) {
                    this.addTopping(topping)
                }

            }
        }
    }
}