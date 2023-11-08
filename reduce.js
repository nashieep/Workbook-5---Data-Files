let purchasedOptions = [
    {item: "A/C", price: 1019.00},
    {item: "Sunroof", price: 699.99},
    {item: "AM/FM Stereo w/ cassette player", price: 199.00}
    ];
    function getTotalCost(currentTotal, arrayElement) {
    return currentTotal + arrayElement.price;
    }
    let sum = purchasedOptions.reduce(getTotalCost, 0);
    