const data = [
    {   id:1,
        name: "Face Mask",
        image:"https://i.ibb.co/7NJF14H/face-mask.png",
        price: 45,
        description: "Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives; the use of a mask alone is not sufficient to provide an adequate level of protection against COVID-19.",
        category: "new all",
        discount: "-20%"
    },
    {   id:2,
        name: "Thermometer",
        image:"https://i.ibb.co/r53FYtH/thermometer.png",
        price: 48,
        description: "A thermometer is a device used for measuring temperature. ... A thermometer is an instrument that measures temperature",
        category: "all",
        discount: "-20%"
    },
    {   id:3,
        name: "Vitamin-D",
        image:"https://i.ibb.co/1LZ4747/vitamin-d.png",
        price: 25,
        description: "Vitamin D is a group of fat-soluble secosteroids responsible for increasing intestinal absorption of calcium, magnesium, and phosphate, and many other biological effects",
        category: "new",
        discount: "-10%"
    },
    {   id:4,
        name: "Sugar Monitor",
        image:"https://i.ibb.co/yhgY2nq/sugar-monitor.png",
        price: 45,
        description: "Insert strip, apply blood, and get results in 5 seconds. CP system exceeded the minimum accuracy requirements of the ISO 15197:2013 standard. Short Testing Time. Simple, Smooth Testing",
        category: "all",
        discount: "-20%"
    },
    {   id:5,
        name: "Hand Sanitizer",
        image:"https://i.ibb.co/PcRDQh9/hand-sen.png",
        price: 30,
        description: "High Quality Hand Sanitizer with Competitive Price. Sourcing Hand Sanitizer from China Now! Join For Free. Get Quotations",
        category: "new all",
        discount: "-20%"
    },
    {   id:6,
        name: "Vitamin-C",
        image:"https://i.ibb.co/tCXr819/vitamin-b.png",
        price: 45,
        description: "Vitamin C is a water-soluble vitamin, one that cannot be stored by the body except in insignificant amounts",
        category: "new all",
        discount: "-20%"
    },
    {   id:7,
        name: "BP Monitor",
        image:"https://i.ibb.co/WV3xX9Z/bp-monitor.png",
        price: 45,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: "all",
        discount: "-20%"
    },
    {   id:8,
        name: "Face Mask",
        image:"https://i.ibb.co/7NJF14H/face-mask.png",
        price: 45,
        description: "Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives; the use of a mask alone is not sufficient to provide an adequate level of protection against COVID-19.",
        category: "all",
        discount: "-20%"
    },
    {   id:9,
        name: "Jactified",
        image:"https://i.ibb.co/n68GdM1/jactified.jpg",
        price: 25,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: "new all",
        discount: "-20%"
    },
    {   id:10,
        name: "Denvar-Capsule-200-mg",
        image:"https://i.ibb.co/cDKwt8X/Denvar-Capsule-200-mg.jpg",
        price: 45,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: "all",
        discount: "-20%"
    },
    {   id:11,
        name: "Disposal-Mask",
        image:"https://i.ibb.co/fdvkjPq/disposal-mask.png",
        price: 35,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: "new all",
        discount: "-20%"
    },
    {   id:12,
        name: "Domflash",
        image:"https://i.ibb.co/3R4JHKM/Domflash.jpg",
        price: 35,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: "new all",
        discount: "-20%"
    },
    {   id:13,
        name: "Inspiring-Healthcare-Products",
        image:"https://i.ibb.co/KyLqHns/Inspiring-Healthcare-Products-Packaging-Design-9.jpg",
        price: 15,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: " all",
        discount: "-20%"
    },
    {   id:14,
        name: "Onpattro",
        image:"https://i.ibb.co/cDC2VJ0/onpattro.jpg",
        price: 25,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: " all",
        discount: "-20%"
    },
    {   id:15,
        name: "Products-health",
        image:"https://i.ibb.co/zX8tpvz/products-health.jpg",
        price: 15,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: " all",
        discount: "-20%"
    },
    {   id:16,
        name: "Jactified",
        image:"https://i.ibb.co/n68GdM1/jactified.jpg",
        price: 45,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: "new all",
        discount: "-20%"
    },
    {   id:17,
        name: "ACETRAM",
        image:"https://i.ibb.co/wKrYBLh/ACETRAM.jpg",
        price: 15,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: " all",
        discount: "-20%"
    },
    {   id:18,
        name: "Actrime",
        image:"https://i.ibb.co/31Zq8Kx/Actrime.jpg",
        price: 15,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: " all",
        discount: "-20%"
    },
    {   id:19,
        name: "Ambien",
        image:"https://i.ibb.co/7zprCj4/Ambien.png",
        price: 15,
        description: "Get a Better Deal on Bulk Blood Pressure Monitor. Find the Right Blood Pressure Monitor Manufacturer in China. Quality China Products. SGS Audited Suppliers. China’s B2B Impact Award.",
        category: " all",
        discount: "-20%"
    }
]
console.log(data);

//images



// https://i.ibb.co/2txzmCx/doctor-1.png
// https://i.ibb.co/2cyYTwT/doctor-2.png
// https://i.ibb.co/k4MMX4D/doctor-3.png








