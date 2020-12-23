import React from 'react';
import {View, Button} from 'react-native';
import Ippopay from 'react-native-ippopay';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Pay Now"
        onPress={() => {
          console.log('[App] onPress');
          Ippopay.initSDK('YOUR PUBLIC KEY');
          Ippopay.makePayment(
            JSON.stringify({
              order_id: 'ORDER_ID',
            }),
            (response) => {
              let {success, message, transaction_id} = JSON.parse(response);
              console.log({success, message, transaction_id});
            },
          );
        }}></Button>
    </View>
  );
};

export default App;
