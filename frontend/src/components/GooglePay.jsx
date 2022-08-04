import React from "react";
import { useSelector } from 'react-redux';
import GooglePayButton from '@google-pay/button-react'

export default function GooglePay(){
    const carrito = useSelector(store => store.shopReducer.productsInShop);
    // console.log(carrito)
    // const priceTotal = carrito.reduce((total, producto) => total + producto.price, 0)
    const priceTotal = carrito.reduce((total, producto) => total + producto.price * producto.cant, 0)
    
    return(
        <>  
            <GooglePayButton
                environment="TEST"
                buttonSizeMode="fill"
                paymentRequest={{
                    apiVersion:2,
                    apiVersionMinor:0,
                    allowedPaymentMethods:[
                        {
                            type:'CARD',
                            parameters:{
                                allowedAuthMethods:['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks:['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type:'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway:'example',
                                    gatewayMerchantId:'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId:carrito.id,
                        merchantName:carrito.name
                    },
                    transactionInfo: {
                        totalPriceStatus:'FINAL',
                        totalPriceLabel:'Total',
                        totalPrice:`${priceTotal}`,
                        currencyCode:'USD',
                        countryCode:'US'
                    },
                    shippingAddressRequired:true,
                    callbackIntents:["PAYMENT_AUTHORIZATION"]
                }}
                onLoadPaymentData= {paymentRequest=>{
                    console.log(paymentRequest.paymentMethodData)
                    console.log('pago realizado')
                    // alert('pago realizado')
                }}
                onPaymentAuthorized={paymentData=>{
                    // console.log(paymentData)
                    return {
                        transactionState : 'SUCCESS'
                    }
                }}
                existingPaymentMethodRequired = 'false'
                buttonColor='black'
                buttonType='buy'
            />
        </>
    )
}