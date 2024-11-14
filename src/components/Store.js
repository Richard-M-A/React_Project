import React from "react";
import "./Store.css"; 

function Store() {
    const toys = [
        {
            "id": 1,
            "name": "Lego City Set",
            "category": "Building Blocks",
            "price": 29.99,
            "description": "A fun city-themed Lego set for creative building.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FR9xjQJJOJbey83KoeUYBo1CsHhDT1oODA&s"
        },
        {
            "id": 2,
            "name": "Shinchan",
            "category": "Cartoon",
            "price": 15.99,
            "description": "Classic Barbie doll with stylish outfit and accessories.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroFulvD7kqEKMM7TTgXETT3EgernZWi1JVg&s"
        },
        {
            "id": 3,
            "name": "Remote Control Car",
            "category": "Vehicles",
            "price": 25.99,
            "description": "High-speed remote control car with rechargeable battery.",
            "imageUrl": "https://baybee.co.in/cdn/shop/files/719svV0OfTL.jpg?v=1685549150"
        },
        {
            "id": 4,
            "name": "Puzzle Game",
            "category": "Puzzles",
            "price": 12.99,
            "description": "A challenging 500-piece puzzle for kids and adults.",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmCok_g_l7zHYjjPXzO2mEMB7g2kjzumTCA&s"
        },
        {
            "id": 5,
            "name": "Stuffed Animal - Teddy Bear",
            "category": "Stuffed Toys",
            "price": 10.99,
            "description": "Soft and cuddly teddy bear, perfect for kids of all ages.",
            "imageUrl": "https://cdn.shopify.com/s/files/1/0577/2083/2209/files/whatmore_poster_c3fe5a0e-c1d3-455f-8d84-a723f9353a8c.webp?v=1721112161"
        },
        {
            "id": 6,
            "name": "Hot Wheels Car Pack",
            "category": "Vehicles",
            "price": 19.99,
            "description": "A set of five Hot Wheels cars for racing enthusiasts.",
            "imageUrl": "https://m.media-amazon.com/images/I/81Ykz9TAacL.jpg"
        },
        {
            "id": 7,
            "name": "Play-Doh Set",
            "category": "Arts & Crafts",
            "price": 9.99,
            "description": "Colorful Play-Doh set for creative modeling fun.",
            "imageUrl": "https://target.scene7.com/is/image/Target/GUEST_3a982279-ff35-4699-8d40-990da717c399?wid=488&hei=488&fmt=pjpeg"
        },
        {
            "id": 8,
            "name": "Toy Kitchen Set",
            "category": "Pretend Play",
            "price": 34.99,
            "description": "Miniature kitchen set with cooking tools and food toys.",
            "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2023/3/296924110/BT/DG/BG/56375392/71fa3yhvgwl-sl1500--500x500.jpg"
        },
        {
            "id": 9,
            "name": "Nerf Blaster",
            "category": "Outdoor Toys",
            "price": 22.99,
            "description": "Nerf blaster with foam darts for action-packed fun.",
            "imageUrl": "https://m.media-amazon.com/images/I/61AzkpQrKsL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": 10,
            "name": "Jigsaw Puzzle - Animal World",
            "category": "Puzzles",
            "price": 18.99,
            "description": "1000-piece jigsaw puzzle featuring animals from around the world.",
            "imageUrl": "https://easybrain.com/uploads/media/1920x1080/09/99-Easybrain%E2%80%99s%20jigsaw%20puzzles%20app%20on%20Google%20Play.jpg?v=1-0"
        },
        {
            "id": 11,
            "name": "Educational Tablet for Kids",
            "category": "Educational Toys",
            "price": 49.99,
            "description": "Interactive educational tablet with learning games and activities.",
            "imageUrl": "https://m.media-amazon.com/images/I/714tfAo+O4L.jpg"
        },
        {
            "id": 12,
            "name": "Wooden Train Set",
            "category": "Building Blocks",
            "price": 27.99,
            "description": "Classic wooden train set with tracks and bridges.",
            "imageUrl": "https://m.media-amazon.com/images/I/81bw2gtI5kL.jpg"
        }
    ];
    
    
    return (
        <div className="store-body">

        <section className="store-container">
            {toys.map(toy => (
                <div key={toy.id} className="card">
                    <img src={toy.imageUrl} alt={toy.name} className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">{toy.name}</h3>
                        <p className="card-category">{toy.category}</p>
                        <p className="card-price">${toy.price}</p>
                        <p className="card-description">{toy.description}</p>
                    </div>
                </div>
            ))}
        </section>
            </div>
    );
}

export default Store;
