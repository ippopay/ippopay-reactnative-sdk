# Ippopay React Native SDK Integration

## Step - 1 - Install dependency with npm package

`$ npm install react-native-ippopay --save`

## Step - 2 - Usuage

```javascript
import Ippopay from "react-native-ippopay";

// To initialize the SDK add the below line of code with the public key you retrieved from ippopay merchant panel. If you don't have a public key create new one.

Ippopay.initSDK("YOUR_KEY");
```

## Step - 3 - Create Order Data Object with necessary inputs

You need to give the Order ID, Custom Color for toolbars, Customer Details. Customer Details is required only if you did not give while creating order in Ippopay.

```javascript
// Customer field is optional.
var orderData = {
  order_id: "YOUR ORDER_ID HERE",
  customer: {
    name: "NAME HERE",
    email: "EMAIL HERE",
    phone: {
      country_code: "+91",
      national_number: "9876543210",
    },
  },
};

Ippopay.makePayment(JSON.stringify(orderData), (response) => {
  let { success, message, transaction_id } = JSON.parse(response);

  //success - type boolean
  //message - type string
  //transaction_id - type string if success is true otherwise it's null
});
```
