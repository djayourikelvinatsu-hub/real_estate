const images = [
    'https://images.unsplash.com/photo-1613490901258-0ce3397ddc8a?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1628014949576-809cc01a3028?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1000&q=80'
];

const cities = [
    "Beverly Hills, CA", "Malibu, CA", "Atherton, CA", "Aspen, CO", 
    "Miami Beach, FL", "Palm Beach, FL", "New York, NY", "Hamptons, NY",
    "Jackson Hole, WY", "Paradise Valley, AZ", "Montecito, CA", "Greenwich, CT",
    "Bel Air, CA", "Naples, FL", "Boca Raton, FL", "Park City, UT"
];

const streets = [
    "Ocean Blvd", "Summit Dr", "Billionaires Row", "Pacific Coast Hwy",
    "Rodeo Dr", "Sunset Blvd", "Fifth Ave", "Park Ave", "Mulholland Dr",
    "Bayside Way", "Alpine Court", "Estate Drive", "Golden Coast Rd",
    "Diamond Terrace", "Whispering Pines", "Crystal Cove", "Majestic Trail"
];

const generateProperties = (count) => {
    const props = [];
    for (let i = 1; i <= count; i++) {
        const priceNum = Math.floor(Math.random() * 250) * 100000 + 2500000; // $2.5M to $27.5M
        const priceStr = '$' + priceNum.toLocaleString();
        const beds = Math.floor(Math.random() * 5) + 3; // 3 to 7 beds
        const bathsRaw = beds + Math.floor(Math.random() * 3) - 1; 
        const baths = bathsRaw > Math.floor(bathsRaw) ? bathsRaw : Math.floor(bathsRaw); // reasonable baths
        const sqftNum = (beds * 900 + Math.floor(Math.random() * 2000));
        const sqftStr = sqftNum.toLocaleString();
        
        const city = cities[Math.floor(Math.random() * cities.length)];
        const streetNum = Math.floor(Math.random() * 8900) + 100;
        const street = streets[Math.floor(Math.random() * streets.length)];
        
        const img = images[i % images.length];
        const type = Math.random() > 0.85 ? 'For Rent' : 'For Sale';
        
        props.push({
            id: `generated-prop-${i}`,
            address: `${streetNum} ${street}, ${city}`,
            price: priceStr,
            beds,
            baths: baths < 2 ? 2.5 : baths, // Minimum of 2.5 baths for these luxury listings
            sqft: sqftStr,
            type,
            img
        });
    }
    return props;
};

// Start with the 6 baseline curated ones, then append 54 generated variants
export const featuredProperties = [
    { id: 'prop-m1', address: '142 Emerald Bay, Laguna Beach, CA', price: '$8,250,000', beds: 4, baths: 5, sqft: '4,200', type: 'For Sale', img: 'https://images.unsplash.com/photo-1613490901258-0ce3397ddc8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { id: 'prop-m2', address: '12 Penthouse, New York, NY', price: '$6,400,000', beds: 3, baths: 3.5, sqft: '3,100', type: 'For Sale', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { id: 'prop-m3', address: '88 Lakefront Dr, Tahoe, NV', price: '$4,150,000', beds: 5, baths: 4, sqft: '4,850', type: 'For Sale', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { id: 'prop-m4', address: '304 Ocean Blvd, Miami, FL', price: '$12,900,000', beds: 6, baths: 7, sqft: '8,500', type: 'For Sale', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { id: 'prop-m5', address: 'Alpine Retreat, Aspen, CO', price: '$9,750,000', beds: 5, baths: 6.5, sqft: '6,200', type: 'For Sale', img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { id: 'prop-m6', address: 'Modern Villa, Austin, TX', price: '$3,850,000', beds: 4, baths: 4, sqft: '3,900', type: 'For Rent', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    ...generateProperties(54)
];
