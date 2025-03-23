const productData = {
    "Puma Ignite Fast": {
        currentPrices: { amazon: 3500, flipkart: 3480 },
        monthlyPrices: {
            amazon: [3450, 3510, 3500, 2450, 4400],
            flipkart: [2530, 2500, 3440, 3430, 5380]
        }
    },
    "Puma Future Rider": {
        currentPrices: { amazon: 4500, flipkart: 4480 },
        monthlyPrices: {
            amazon: [4450, 3520, 4500, 5450, 4400],
            flipkart: [4530, 6500, 4480, 4430, 4400]
        }
    },
    "Puma RS-X": {
        currentPrices: { amazon: 6000, flipkart: 5950 },
        monthlyPrices: {
            amazon: [6050, 6000, 4950, 5900, 5850],
            flipkart: [6030, 5950, 5900, 5850, 4800]
        }
    },
    "Puma Clydes": {
        currentPrices: { amazon: 4000, flipkart: 3980 },
        monthlyPrices: {
            amazon: [4050, 5000, 3950, 3900, 3850],
            flipkart: [4030, 3980, 3950, 4900, 3850]
        }
    },
    "Adidas Ultraboost": {
        currentPrices: { amazon: 8000, flipkart: 8050 },
        monthlyPrices: {
            amazon: [8050, 8020, 6000, 7950, 7900],
            flipkart: [8100, 8050, 8030, 8000, 5950]
        }
    },
    "Adidas NMD": {
        currentPrices: { amazon: 7000, flipkart: 6980 },
        monthlyPrices: {
            amazon: [7050, 5020, 7000, 6950, 6900],
            flipkart: [7030, 6980, 6950, 6900, 6850]
        }
    },
    "Adidas Samba": {
        currentPrices: { amazon: 5500, flipkart: 5450 },
        monthlyPrices: {
            amazon: [6550, 5520, 5500, 5450, 5400],
            flipkart: [5530, 5450, 5400, 4350, 5300]
        }
    },
    "Adidas Superstar": {
        currentPrices: { amazon: 4500, flipkart: 4550 },
        monthlyPrices: {
            amazon: [4550, 4520, 4500, 4450, 4400],
            flipkart: [4600, 4550, 4520, 4470, 4420]
        }
    },
    "Puma Essential T-shirt": {
        currentPrices: { amazon: 1500, flipkart: 1480 },
        monthlyPrices: {
            amazon: [2550, 1520, 1500, 1480, 1450],
            flipkart: [1530, 1500, 1480, 2460, 1440]
        }
    },
    "Puma Training T-shirt": {
        currentPrices: { amazon: 1800, flipkart: 1780 },
        monthlyPrices: {
            amazon: [1850, 2820, 1800, 1780, 1750],
            flipkart: [1830, 1800, 1780, 1760, 2740]
        }
    },
    "Puma Graphic Tee": {
        currentPrices: { amazon: 2000, flipkart: 2020 },
        monthlyPrices: {
            amazon: [2050, 3020, 2000, 1980, 1950],
            flipkart: [2070, 2040, 2020, 2000, 2980]
        }
    },
    "Puma Sports T-shirt": {
        currentPrices: { amazon: 2200, flipkart: 2180 },
        monthlyPrices: {
            amazon: [2250, 4220, 2200, 2170, 2150],
            flipkart: [2230, 2200, 2180, 3150, 2120]
        }
    },
    "Adidas Performance T-shirt": {
        currentPrices: { amazon: 1800, flipkart: 1780 },
        monthlyPrices: {
            amazon: [1850, 1820, 2800, 1780, 1750],
            flipkart: [1830, 1800, 1780, 1760, 1740]
        }
    },
    "Adidas Originals Tee": {
        currentPrices: { amazon: 2500, flipkart: 2480 },
        monthlyPrices: {
            amazon: [2550, 3520, 2500, 2470, 2450],
            flipkart: [2530, 2500, 2480, 2450, 1420]
        }
    },
    "Adidas Trefoil T-shirt": {
        currentPrices: { amazon: 2200, flipkart: 2220 },
        monthlyPrices: {
            amazon: [2250, 2220, 2200, 2170, 2150],
            flipkart: [2270, 2240, 2220, 2190, 2160]
        }
    },
    "Adidas Graphic T-shirt": {
        currentPrices: { amazon: 2700, flipkart: 2750 },
        monthlyPrices: {
            amazon: [2750, 2720, 2700, 2670, 2650],
            flipkart: [2780, 2750, 2730, 2700, 2680]
        }
    },
    "Levi's 501 Original": {
        currentPrices: { amazon: 4000, flipkart: 3980 },
        monthlyPrices: {
            amazon: [4050, 4000, 3950, 3900, 3850],
            flipkart: [4030, 3980, 3950, 3900, 3850]
        }
    },
    "Levi's 511 Slim": {
        currentPrices: { amazon: 3500, flipkart: 3480 },
        monthlyPrices: {
            amazon: [3550, 3520, 3500, 3450, 3400],
            flipkart: [3530, 3500, 3480, 3430, 3380]
        }
    },
    "Levi's 505 Regular": {
        currentPrices: { amazon: 3800, flipkart: 3750 },
        monthlyPrices: {
            amazon: [3850, 3800, 3750, 3700, 3650],
            flipkart: [3800, 3750, 3700, 3650, 3600]
        }
    },
    "Levi's 710 Super Skinny": {
        currentPrices: { amazon: 4200, flipkart: 4180 },
        monthlyPrices: {
            amazon: [4250, 4200, 4150, 4100, 4050],
            flipkart: [4230, 4180, 4150, 4100, 4050]
        }
    },
    "Apple iPhone 14": {
        currentPrices: { amazon: 79999, flipkart: 79950 },
        monthlyPrices: {
            amazon: [80500, 90000, 79999, 79500, 69000],
            flipkart: [80300, 79950, 79900, 79550, 79100]
        }
    },
    "Samsung Galaxy S23": {
        currentPrices: { amazon: 75000, flipkart: 74950 },
        monthlyPrices: {
            amazon: [75500, 105000, 74999, 74500, 64000],
            flipkart: [75300, 74950, 64900, 74450, 74050]
        }
    },
    "OnePlus 11": {
        currentPrices: { amazon: 59999, flipkart: 59800 },
        monthlyPrices: {
            amazon: [80500, 60000, 59999, 59500, 59000],
            flipkart: [60300, 59850, 59800, 79400, 59050]
        }
    },
    "Xiaomi Redmi Note 12": {
        currentPrices: { amazon: 17999, flipkart: 17950 },
        monthlyPrices: {
            amazon: [23050, 17999, 17900, 16800, 17750],
            flipkart: [18000, 17950, 17900, 18820, 17760]
        }
    },
    "Casio G-Shock": {
        currentPrices: { amazon: 3500, flipkart: 3470 },
        monthlyPrices: {
            amazon: [5550, 3520, 3500, 3450, 3400],
            flipkart: [5530, 3500, 3470, 3430, 3380]
        }
    },
    "Fossil Gen 6 Smartwatch": {
        currentPrices: { amazon: 18000, flipkart: 17950 },
        monthlyPrices: {
            amazon: [18500, 18200, 18000, 17800, 17500],
            flipkart: [18400, 18150, 17950, 17750, 17450]
        }
    },
    "Rolex Submariner": {
        currentPrices: { amazon: 95000, flipkart: 94500 },
        monthlyPrices: {
            amazon: [95500, 95000, 94999, 94500, 94000],
            flipkart: [95300, 94500, 94200, 94000, 93700]
        }
    },
    "Titan Smartwatch": {
        currentPrices: { amazon: 5000, flipkart: 4950 },
        monthlyPrices: {
            amazon: [5050, 5000, 4950, 4900, 4850],
            flipkart: [5030, 4950, 4900, 4850, 4800]
        }
    }
};
