import * as yup from 'yup'

export const schema = yup.object().shape({
    day: yup
        .number()
        .max(10)
        .required('Required'),
    month: yup
        .number()
        .required('Required'),
    year: yup
        .number()
        .required('Required'),
})