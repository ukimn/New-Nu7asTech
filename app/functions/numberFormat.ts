const NUMBER_FORMAT = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

export const formatPrice = (number: number): string => {
    return NUMBER_FORMAT.format(number);
}
