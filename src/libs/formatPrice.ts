export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat(
        'id-ID',{
            style:'currency',
            currency:'IDR',
            notation: 'standard',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            maximumSignificantDigits: 3,
            minimumSignificantDigits: 3,
            useGrouping: true,
        }
    ).format(amount)
}