exports.list = () => {
    return [
        {
            id: 1,
            name: 'New Balance Men\'s Fresh Foam More v2 - Gunmetal with Neo Flame & Black',
            price: '164.95',
            rate: 4,
            images: ['images/img/shoes/pic11.webp', 'images/img/shoes/pic12.webp', 'images/img/shoes/pic13.webp', 'images/img/shoes/pic14.webp'],
            status: 'sale'
        },
        {
            id: 2,
            name: 'New Balance Women\'s 840v4 - Black with White',
            price: '124.95',
            rate: 4,
            images: ['images/img/shoes/pic21.jpg', 'images/img/shoes/pic22.webp', 'images/img/shoes/pic23.webp', 'images/img/shoes/pic24.webp'],
            status: ''
        },
        {
            id: 3,
            name: 'Merrell Big Kid\'s Moab FST Mid A/C Waterproof Boot - Boulder',
            price: '67.95',
            rate: 3,
            images: ['images/img/shoes/pic31.webp', 'images/img/shoes/pic32.webp', 'images/img/shoes/pic33.webp', 'images/img/shoes/pic34.webp'],
            status: 'sale'
        },
        {
            id: 4,
            name: 'HOKA ONE ONE Women\'s Rincon 2 - Clematis Blue / Arctic Ice',
            price: '114.95',
            rate: 5,
            images: ['images/img/shoes/pic41.webp', 'images/img/shoes/pic42.webp', 'images/img/shoes/pic43.webp', 'images/img/shoes/pic44.webp'],
            status: ''
        },
        {
            id: 5,
            name: 'Brooks Women\'s Ghost 13 - Black / Pearl',
            price: '129.95',
            rate: 4,
            images: ['images/img/shoes/pic51.webp', 'images/img/shoes/pic52.webp', 'images/img/shoes/pic53.webp', 'images/img/shoes/pic54.webp'],
            status: ''
        }
    ]
}

exports.shoebyId = () => {
    const dummyProduct =  {
        id: 1,
        name: 'New Balance Men\'s Fresh Foam More v2 - Gunmetal with Neo Flame & Black',
        price: '164.95',
        rate: 4,
        images: ['/images/img/shoes/pic11.webp', '/images/img/shoes/pic12.webp', '/images/img/shoes/pic13.webp', '/images/img/shoes/pic14.webp'],
        status: 'sale'
    };

    return dummyProduct;
}