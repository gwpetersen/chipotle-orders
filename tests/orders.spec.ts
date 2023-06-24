import { test, expect } from '@playwright/test';
import { ENTREE_TYPE, SAUCE_TYPE, TOPPING_TYPE } from '../pages/types';
import { OrderPage } from '../pages/orders/orderpage';

test('Adds Correct Order', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  const itemsToOrder = [
    { entree: ENTREE_TYPE.SALAD, 
      sauces: [SAUCE_TYPE.HOT], 
      toppings: [TOPPING_TYPE.CHEESE] 
    },
    { 
      entree: ENTREE_TYPE.BURGER, 
      sauces: [
        SAUCE_TYPE.MEDIUM, 
        SAUCE_TYPE.MILD
      ], 
      toppings: [TOPPING_TYPE.LETTUCE, TOPPING_TYPE.CHEESE] 
    },
  ]
  const order = new OrderPage(page)
  await order.addOrderItems(itemsToOrder)
  // going to assume we have a "finish order" button
  await order.finishOrder()
  // I can now assert the items were added based on UI

});
