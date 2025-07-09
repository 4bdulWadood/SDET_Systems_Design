from locust import HttpUser, task, between
import random

class SockShopUser(HttpUser):
    wait_time = between(1, 3)

    @task(3)
    def browse_catalogue(self):
        self.client.get("/catalogue", name="/catalogue")

    @task(2)
    def view_product(self):
        product_id = random.randint(1, 10)
        self.client.get(f"/catalogue/{product_id}", name="/catalogue/product")

    @task(1)
    def checkout_order(self):
        checkout_data = {
            "firstName": "John",
            "lastName": "Doe",
            "address": "123 Elm St",
            "email": "john.doe@example.com",
            "cardNumber": "4111111111111111",
            "cardExpiry": "12/25",
            "cardCVC": "123"
        }
        self.client.post("/orders", json=checkout_data, name="/orders/checkout")