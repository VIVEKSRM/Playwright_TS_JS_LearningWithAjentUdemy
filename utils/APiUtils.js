class APiUtils
{

    constructor(apiContext,loginPayLoad)
    {
        this.apiContext =apiContext; 
        this.loginPayLoad = loginPayLoad;
        
    }

    async getToken()
     {
        const loginResponse =  await  this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:this.loginPayLoad
         } )//200,201,
        const loginResponseJson = await loginResponse.json();
        const token =loginResponseJson.token;
        console.log(token);
        return token;

    }

    async createOrder(orderPayLoad)
    {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers: {
                'Authorization': `Bearer ${response.token}`,
                'Content-Type': 'application/json'
            },
        });

        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);

        if (!orderResponse.ok) {
            throw new Error(`Order creation failed: ${orderResponseJson.message || orderResponse.statusText}`);
        }

        if (!Array.isArray(orderResponseJson.orders) || orderResponseJson.orders.length === 0) {
            throw new Error(`Unexpected order response shape: ${JSON.stringify(orderResponseJson)}`);
        }

        response.orderId = orderResponseJson.orders[0];
        return response;
    }



    }
module.exports = {APiUtils};




