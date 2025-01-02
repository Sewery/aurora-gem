
-- - Table: opinions
CREATE TABLE opinions (
   opinion_id int  NOT NULL AUTO_INCREMENT,
   customer_id int  NOT NULL,
   content varchar(400)  NOT NULL,
   stars int  NOT NULL,
   product_id int  NOT NULL,
   CONSTRAINT opinions_pk PRIMARY KEY (opinion_id)
);
-- Table: categories
CREATE TABLE categories (
   category_id int  NOT NULL AUTO_INCREMENT,
   name varchar(50)  NOT NULL,
   CONSTRAINT categories_pk PRIMARY KEY (category_id)
);
-- Table: customers
CREATE TABLE customers (
   customer_id int  NOT NULL AUTO_INCREMENT,
   firstname varchar(50)  NOT NULL,
   lastname varchar(50)  NOT NULL,
   email varchar(100)  NOT NULL,
   password varchar(255)  NOT NULL,
   postal_code varchar(6)  NULL,
   address varchar(100)  NULL,
   CONSTRAINT customers_pk PRIMARY KEY (customer_id)
);
-- Table: order_details
CREATE TABLE order_details (
   order_id int  NOT NULL,
   product_id int  NOT NULL,
   quantity int  NOT NULL,
   price double(8,2)  NOT NULL,
   CONSTRAINT order_details_pk PRIMARY KEY (product_id,order_id)
);
-- Table: images
CREATE TABLE images (
   image_id int  NOT NULL AUTO_INCREMENT,
   product_id int  NOT NULL,
   url varchar(255)  NOT NULL,
   file_name varchar(255)  NOT NULL,
   CONSTRAINT images_pk PRIMARY KEY (image_id)
);
-- Table: products
CREATE TABLE products (
   product_id int  NOT NULL AUTO_INCREMENT,
   price double(8,2)  NOT NULL,
   name varchar(50)  NOT NULL,
   short_description varchar(255)  NOT NULL,
   description varchar(255)  NOT NULL,
   category_id int  NOT NULL,
   available_quantity int  NOT NULL,
   CONSTRAINT products_pk PRIMARY KEY (product_id)
);
-- Table: orders
CREATE TABLE orders (
   order_id int  NOT NULL AUTO_INCREMENT,
   order_date datetime  NOT NULL,
   customer_id int  NOT NULL,
   shipment double(8,2)  NOT NULL,
   CONSTRAINT orders_pk PRIMARY KEY (order_id)
);


--- Insert data into opinions
INSERT INTO opinions (customer_id, content, stars, product_id) VALUES
(1, 'Elegant design and great quality', 5, 1),
(2, 'Amazing product, worth every penny!', 5, 2),
(3, 'Very satisfied with the purchase', 4, 3),
(4, 'The ring exceeded my expectations', 5, 4),
(5, 'High quality but slightly overpriced', 4, 5),
(6, 'Perfect for special occasions', 5, 6),
(7, 'The necklace is simply stunning', 5, 7),
(8, 'Bracelet matches well with my outfit', 4, 8),
(9, 'Great craftsmanship, fast shipping', 5, 9),
(10, 'Not as shiny as expected', 3, 10);

-- Insert data into categories
INSERT INTO categories (name) VALUES
('Rings'),
('Necklaces'),
('Bracelets'),
('Earrings'),
('Pendants'),
('Watches'),
('Brooches'),
('Anklets'),
('Charms'),
('Cufflinks');

-- Insert data into customers
INSERT INTO customers (firstname, lastname, email, password, postal_code, address) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123', '12345', '123 Luxury St.'),
('Jane', 'Smith', 'jane.smith@example.com', 'securepass', '54321', '456 Gem Ave.'),
('Alice', 'Brown', 'alice.brown@example.com', 'mypassword', '67890', '789 Jewel Rd.'),
('Bob', 'Johnson', 'bob.johnson@example.com', 'strongpass', '09876', '321 Opal Ln.'),
('Emily', 'White', 'emily.white@example.com', 'whitegem', '11223', '654 Pearl Blvd.'),
('Michael', 'Green', 'michael.green@example.com', 'greenstone', '44556', '987 Ruby Cir.'),
('Sophia', 'King', 'sophia.king@example.com', 'crownjewel', '77889', '123 Diamond Ct.'),
('Liam', 'Lee', 'liam.lee@example.com', 'leeluxe', '99100', '456 Sapphire Dr.'),
('Olivia', 'Taylor', 'olivia.taylor@example.com', 'taylorstone', '22334', '789 Emerald Way'),
('James', 'Anderson', 'james.anderson@example.com', 'jewelking', '55667', '321 Gold Pl.');

-- Insert data into order_details
INSERT INTO order_details (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 1200.00),
(1, 2, 1, 2500.00),
(2, 3, 2, 1500.00),
(3, 4, 1, 1800.00),
(3, 5, 1, 3000.00),
(4, 6, 1, 2000.00),
(5, 7, 2, 2200.00),
(6, 8, 1, 1700.00),
(7, 9, 1, 1900.00),
(8, 10, 1, 800.00);

-- Insert data into images
INSERT INTO images (product_id, url, file_name) VALUES
(1, 'https://example.com/images/ring1.jpg', 'ring1.jpg'),
(2, 'https://example.com/images/necklace1.jpg', 'necklace1.jpg'),
(3, 'https://example.com/images/bracelet1.jpg', 'bracelet1.jpg'),
(4, 'https://example.com/images/earring1.jpg', 'earring1.jpg'),
(5, 'https://example.com/images/pendant1.jpg', 'pendant1.jpg'),
(6, 'https://example.com/images/watch1.jpg', 'watch1.jpg'),
(7, 'https://example.com/images/brooch1.jpg', 'brooch1.jpg'),
(8, 'https://example.com/images/anklet1.jpg', 'anklet1.jpg'),
(9, 'https://example.com/images/charm1.jpg', 'charm1.jpg'),
(10, 'https://example.com/images/cufflink1.jpg', 'cufflink1.jpg');

-- Insert data into products
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(1200.00, 'Diamond Ring', 'Elegant diamond ring', 'A stunning diamond ring perfect for engagements', 1, 10),
(2500.00, 'Gold Necklace', 'Beautiful gold necklace', 'A luxurious gold necklace for special occasions', 2, 5),
(1500.00, 'Silver Bracelet', 'Stylish silver bracelet', 'A versatile bracelet for everyday wear', 3, 8),
(1800.00, 'Ruby Earrings', 'Exquisite ruby earrings', 'Ruby-studded earrings with a classic design', 4, 7),
(3000.00, 'Platinum Pendant', 'Premium platinum pendant', 'A dazzling platinum pendant with intricate details', 5, 3),
(2000.00, 'Luxury Watch', 'Elegant luxury watch', 'A high-end watch with precision craftsmanship', 6, 4),
(2200.00, 'Sapphire Brooch', 'Sapphire-studded brooch', 'A timeless brooch with blue sapphire accents', 7, 2),
(1700.00, 'Gold Anklet', 'Charming gold anklet', 'A delicate anklet for a sophisticated touch', 8, 6),
(1900.00, 'Gemstone Charm', 'Gemstone-encrusted charm', 'A charm with multi-colored gemstones', 9, 9),
(800.00, 'Silver Cufflinks', 'Sleek silver cufflinks', 'Elegant cufflinks for formal wear', 10, 15);

-- Insert data into orders
INSERT INTO orders (order_date, customer_id, shipment) VALUES
('2025-01-01 10:00:00', 1, 50.00),
('2025-01-02 14:30:00', 2, 40.00),
('2025-01-03 16:45:00', 3, 60.00),
('2025-01-04 11:20:00', 4, 55.00),
('2025-01-05 18:15:00', 5, 45.00),
('2025-01-06 13:10:00', 6, 70.00),
('2025-01-07 09:30:00', 7, 35.00),
('2025-01-08 20:50:00', 8, 80.00),
('2025-01-09 12:00:00', 9, 65.00),
('2025-01-10 17:05:00', 10, 30.00);
