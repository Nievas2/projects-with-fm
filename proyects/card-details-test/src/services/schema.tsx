"use client"
import * as yup from "yup";

export const schemaCard = yup.object().shape({
    cardHolder: yup.string().required(),
    cardNumber: yup.string().max(16, "El numero no debe exceder los 16 caracteres").required(),
    expiryDateMM: yup.string().max(2, "max 2 caracters").min(2, "min 2 caracters").required("expiry date is required"),
    expiryDateYY: yup.string().max(2, "max 2 caracters").min(2, "min 2 caracters").required("expiry date is required"),
    cvc: yup.string().max(3, "max 3 caracters").min(3, "min 3 caracters").required(),

})