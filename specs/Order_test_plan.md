# Order Flow Test Plan

## Application Overview

Test plan for placing and validating an order in the demo e-commerce flow using Playwright.

## Test Scenarios

### 1. Order flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Place an order with valid cart and checkout details

**File:** `specs/Order_test_plan.md`

**Steps:**
  1. Open the application and sign in with valid credentials.
    - expect: The user lands on the shop page and can see products.
  2. Add a product to the cart from the shop page.
    - expect: The cart count increases and the product is visible in the cart.
  3. Open the cart and proceed to checkout.
    - expect: The checkout page shows the selected items and order summary.
  4. Fill in the required shipping and payment details.
    - expect: The user can submit the order without validation errors.
  5. Submit the order and confirm the confirmation page.
    - expect: The order is successfully placed and a confirmation message is displayed.

#### 1.2. Prevent order placement when cart is empty

**File:** `specs/Order_test_plan.md`

**Steps:**
  1. Sign in and open the cart without adding any product.
    - expect: The cart is empty and checkout is disabled or blocked.
  2. Attempt to proceed to checkout.
    - expect: The application shows a validation message or prevents the action.

#### 1.3. Prevent order placement with missing required information

**File:** `specs/Order_test_plan.md`

**Steps:**
  1. Add a product to the cart and start checkout.
    - expect: The checkout form is shown.
  2. Leave a required field empty and submit the order.
    - expect: The form shows a validation error and the order is not placed.
