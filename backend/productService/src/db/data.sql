create schema `aurora-gem-db`;
use `aurora-gem-db`;
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

-- Insert data into products
-- Rings
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(199.00, 'Silver Ring with Zirconia', 'Elegant silver ring adorned with zirconia.', 'A beautiful silver ring featuring a sparkling zirconia stone.', 1, 50),
(299.00, 'Gold Ring with Diamond', 'Classic gold ring with a single diamond.', 'A timeless gold ring showcasing a brilliant diamond.', 1, 30),
(179.00, 'Platinum Ring with Sapphire', 'Sophisticated platinum ring with sapphire.', 'An elegant platinum ring featuring a stunning sapphire.', 1, 25),
(249.00, 'Silver Ring with Ruby', 'Silver ring adorned with a ruby gemstone.', 'A gorgeous silver ring featuring a vibrant ruby.', 1, 40),
(149.00, 'Gold Ring with Topaz', 'Gold ring with a blue topaz gemstone.', 'A luxurious gold ring with a sparkling blue topaz.', 1, 45),
(199.00, 'Diamond Ring in White Gold', 'Elegant white gold ring set with a diamond.', 'A refined white gold ring showcasing a dazzling diamond.', 1, 50);

-- Necklaces
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(149.00, 'Gold Necklace with Pendant', 'Beautiful gold necklace with a round pendant.', 'A stunning gold necklace featuring a polished round pendant.', 2, 60),
(249.00, 'Diamond Necklace', 'A diamond necklace for special occasions.', 'A sophisticated diamond necklace, perfect for formal events.', 2, 40),
(299.00, 'Sapphire Necklace', 'Elegant necklace with a sapphire gemstone.', 'A refined sapphire necklace, showcasing elegance and style.', 2, 35),
(129.00, 'Pearl Necklace', 'Delicate pearl necklace with gold clasp.', 'A timeless pearl necklace featuring a gold clasp.', 2, 50),
(199.00, 'Silver Necklace with Heart Pendant', 'A silver necklace with a heart-shaped pendant.', 'An elegant silver necklace showcasing a heart-shaped pendant.', 2, 60),
(179.00, 'Gold Chain Necklace', 'Classic gold chain necklace.', 'A stylish gold chain necklace that pairs well with any attire.', 2, 45);

-- Bracelets
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(129.00, 'Silver Charm Bracelet', 'A silver bracelet with multiple charms.', 'A charming silver bracelet featuring a variety of decorative charms.', 3, 60),
(199.00, 'Gold Cuff Bracelet', 'Elegant gold cuff bracelet with a polished finish.', 'A luxurious gold cuff bracelet, perfect for formal events.', 3, 35),
(149.00, 'Leather Bracelet with Metal Clasp', 'Stylish leather bracelet with metal clasp.', 'A trendy leather bracelet with a stylish metal clasp.', 3, 50),
(159.00, 'Silver Bangle Bracelet', 'A classic silver bangle bracelet.', 'A sleek and minimalistic silver bangle bracelet.', 3, 55),
(179.00, 'Gold Bracelet with Diamonds', 'Gold bracelet featuring diamonds.', 'A luxurious gold bracelet embellished with shimmering diamonds.', 3, 40),
(129.00, 'Bracelet with Turquoise', 'Charming bracelet adorned with turquoise stones.', 'A beautiful bracelet featuring natural turquoise stones.', 3, 60);

-- Earrings
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(99.00, 'Silver Earrings with Zirconia', 'Simple silver earrings with zirconia stones.', 'Elegant silver earrings with shimmering zirconia stones.', 4, 60),
(149.00, 'Gold Hoop Earrings', 'Gold hoop earrings with a sleek design.', 'Timeless gold hoop earrings that can be worn with any outfit.', 4, 40),
(199.00, 'Diamond Stud Earrings', 'Classic diamond stud earrings.', 'Exquisite diamond stud earrings perfect for any occasion.', 4, 50),
(129.00, 'Silver Drop Earrings', 'Delicate silver drop earrings.', 'Stylish silver earrings with a long drop design.', 4, 55),
(169.00, 'Gold Earrings with Pearls', 'Elegant gold earrings featuring pearls.', 'Beautiful gold earrings adorned with round pearls.', 4, 45),
(179.00, 'Sapphire Earrings in Gold', 'Gold earrings with sapphire gemstones.', 'Luxurious gold earrings featuring stunning sapphires.', 4, 30);

-- Pendants
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(129.00, 'Silver Pendant with Ruby', 'Silver pendant with a ruby gemstone.', 'Elegant silver pendant showcasing a vibrant ruby gemstone.', 5, 50),
(169.00, 'Gold Pendant with Emerald', 'Gold pendant with an emerald stone.', 'A refined gold pendant featuring a deep green emerald stone.', 5, 45),
(199.00, 'Diamond Pendant in White Gold', 'White gold pendant with a diamond centerpiece.', 'A sophisticated white gold pendant set with a brilliant diamond.', 5, 40),
(179.00, 'Heart-Shaped Pendant with Zirconia', 'Silver heart-shaped pendant with zirconia stones.', 'A delicate heart-shaped silver pendant, adorned with zirconia.', 5, 60),
(139.00, 'Pendant with Amethyst', 'Silver pendant with a purple amethyst gemstone.', 'A graceful silver pendant featuring a stunning amethyst stone.', 5, 55),
(159.00, 'Gold Pendant with Sapphire', 'Gold pendant with a sapphire gemstone.', 'A beautiful gold pendant set with a captivating sapphire gemstone.', 5, 30);

-- Watches
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(299.00, 'Men\'s Stainless Steel Watch', 'Durable stainless steel watch with a black dial.', 'A robust men\'s watch featuring a stainless steel band and black dial.', 6, 45),
(349.00, 'Women\'s Gold-Plated Watch', 'Stylish gold-plated watch with a white face.', 'An elegant women\'s watch with a gold-plated band and white face.', 6, 30),
(199.00, 'Silver Watch with Leather Strap', 'Sleek silver watch with leather strap.', 'A refined silver watch featuring a comfortable leather strap.', 6, 60),
(179.00, 'Men\'s Chronograph Watch', 'Sporty chronograph watch with multiple dials.', 'A sporty men\'s watch with chronograph features and a robust design.', 6, 40),
(249.00, 'Women\'s Diamond Watch', 'Luxury women\'s watch with diamonds.', 'An exquisite women\'s watch featuring diamond accents.', 6, 50),
(229.00, 'Stainless Steel Watch with Blue Dial', 'A men\'s stainless steel watch with a striking blue dial.', 'A stylish stainless steel watch featuring a blue dial and a robust band.', 6, 35);

-- Brooches
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(99.00, 'Silver Brooch with Pearls', 'A silver brooch adorned with pearls.', 'A classic silver brooch with lustrous pearls.', 7, 60),
(149.00, 'Gold Brooch with Sapphire', 'A gold brooch featuring a sapphire stone.', 'An elegant gold brooch showcasing a stunning sapphire gemstone.', 7, 45),
(129.00, 'Silver Butterfly Brooch', 'Charming silver brooch in the shape of a butterfly.', 'A delicate silver brooch featuring a butterfly design.', 7, 55),
(179.00, 'Gold Rose Brooch', 'Luxurious gold brooch shaped like a rose.', 'An exquisite gold brooch with a rose design.', 7, 40),
(149.00, 'Diamond Brooch', 'A diamond brooch with a floral design.', 'A refined diamond brooch featuring a floral design.', 7, 50),
(199.00, 'Vintage Brooch with Garnet', 'A vintage brooch featuring a garnet stone.', 'A classic vintage brooch with a captivating garnet gemstone.', 7, 30);

-- Anklets
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(99.00, 'Silver Anklet with Charms', 'A delicate silver anklet with charms.', 'A charming silver anklet with multiple decorative charms.', 8, 60),
(129.00, 'Gold Anklet with Diamonds', 'Gold anklet adorned with diamonds.', 'An elegant gold anklet featuring shimmering diamonds.', 8, 45),
(149.00, 'Silver Anklet with Turquoise', 'Silver anklet featuring turquoise stones.', 'A beautiful silver anklet with natural turquoise stones.', 8, 50),
(179.00, 'Gold Anklet with Pearls', 'A luxurious gold anklet with pearls.', 'A refined gold anklet showcasing lustrous pearls.', 8, 40),
(159.00, 'Diamond Anklet in White Gold', 'White gold anklet with diamonds.', 'A sophisticated white gold anklet adorned with sparkling diamonds.', 8, 30),
(189.00, 'Silver Anklet with Amethyst', 'A delicate silver anklet with amethyst stones.', 'A charming silver anklet featuring a beautiful amethyst stone.', 8, 35);

-- Charms
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(79.00, 'Silver Charm with Enamel', 'A cute silver charm with colorful enamel.', 'A playful silver charm adorned with vibrant enamel colors.', 9, 90),
(129.00, 'Gold Charm with Diamonds', 'Gold charm featuring diamonds.', 'A luxurious gold charm with dazzling diamonds.', 9, 40),
(99.00, 'Silver Heart Charm', 'Silver charm shaped like a heart.', 'A charming silver heart-shaped charm perfect for bracelets.', 9, 70),
(149.00, 'Gold Charm with Ruby', 'Gold charm featuring a ruby stone.', 'An elegant gold charm adorned with a vibrant ruby gemstone.', 9, 50),
(179.00, 'Silver Star Charm', 'A silver charm shaped like a star.', 'A sleek silver charm featuring a star design.', 9, 60),
(159.00, 'Gold Moon Charm', 'Gold charm shaped like a crescent moon.', 'A beautiful gold charm with a crescent moon design.', 9, 30);

-- Cufflinks
INSERT INTO products (price, name, short_description, description, category_id, available_quantity) VALUES
(199.00, 'Silver Cufflinks with Onyx', 'Sophisticated silver cufflinks featuring onyx stones.', 'A stylish pair of silver cufflinks with black onyx stones.', 10, 55),
(249.00, 'Gold Cufflinks with Mother of Pearl', 'Elegant gold cufflinks with mother of pearl inlay.', 'A refined pair of gold cufflinks featuring mother of pearl inlay.', 10, 30),
(179.00, 'Silver Cufflinks with Sapphire', 'Silver cufflinks adorned with sapphire stones.', 'A stylish pair of silver cufflinks featuring stunning sapphire stones.', 10, 40),
(169.00, 'Gold Cufflinks with Diamond', 'Gold cufflinks featuring a diamond inlay.', 'A sophisticated pair of gold cufflinks with diamond accents.', 10, 25),
(159.00, 'Silver Cufflinks with Amethyst', 'Silver cufflinks featuring amethyst stones.', 'A refined pair of silver cufflinks adorned with amethyst stones.', 10, 50),
(189.00, 'Gold Cufflinks with Emeralds', 'Elegant gold cufflinks with emerald gemstones.', 'A luxurious pair of gold cufflinks featuring stunning emerald gemstones.', 10, 35);

-- Insert data into images
INSERT INTO images (product_id, url, file_name) VALUES
(1, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-1.avif', 'jewelery-1.avif'),
(2, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-2.avif', 'jewelery-2.avif'),
(3, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-3.avif', 'jewelery-3.avif'),
(4, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-4.avif', 'jewelery-4.avif'),
(5, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-5.avif', 'jewelery-5.avif'),
(6, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/rings/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(7, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/necklaces/jewelery-1.avif', 'jewelery-1.avif'),
(8, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/necklaces/jewelery-2.avif', 'jewelery-2.avif'),
(9, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/necklaces/jewelery-3.avif', 'jewelery-3.avif'),
(10, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/necklaces/jewelery-4.avif', 'jewelery-4.avif'),
(11, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/necklaces/jewelery-5.avif', 'jewelery-5.avif'),
(12, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/necklaces/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(13, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-1.avif', 'jewelery-1.avif'),
(14, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-2.avif', 'jewelery-2.avif'),
(15, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-3.avif', 'jewelery-3.avif'),
(16, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-4.avif', 'jewelery-4.avif'),
(17, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-5.avif', 'jewelery-5.avif'),
(18, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/bracelets/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(19, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/earrings/jewelery-1.avif', 'jewelery-1.avif'),
(20, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/earrings/jewelery-2.avif', 'jewelery-2.avif'),
(21, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/earrings/jewelery-3.avif', 'jewelery-3.avif'),
(22, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/earrings/jewelery-4.avif', 'jewelery-4.avif'),
(23, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/earrings/jewelery-5.avif', 'jewelery-5.avif'),
(24, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/earrings/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(25, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/pendants/jewelery-1.avif', 'jewelery-1.avif'),
(26, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/pendants/jewelery-2.avif', 'jewelery-2.avif'),
(27, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/pendants/jewelery-3.avif', 'jewelery-3.avif'),
(28, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/pendants/jewelery-4.avif', 'jewelery-4.avif'),
(29, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/pendants/jewelery-5.avif', 'jewelery-5.avif'),
(30, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/pendants/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(31, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/watches/jewelery-1.avif', 'jewelery-1.avif'),
(32, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/watches/jewelery-2.avif', 'jewelery-2.avif'),
(33, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/watches/jewelery-3.avif', 'jewelery-3.avif'),
(34, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/watches/jewelery-4.avif', 'jewelery-4.avif'),
(35, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/watches/jewelery-5.avif', 'jewelery-5.avif'),
(36, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/watches/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(37, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/brooches/jewelery-1.avif', 'jewelery-1.avif'),
(38, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/brooches/jewelery-2.avif', 'jewelery-2.avif'),
(39, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/brooches/jewelery-3.avif', 'jewelery-3.avif'),
(40, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/brooches/jewelery-4.avif', 'jewelery-4.avif'),
(41, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/brooches/jewelery-5.avif', 'jewelery-5.avif'),
(42, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/brooches/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(43, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/anklets/jewelery-1.avif', 'jewelery-1.avif'),
(44, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/anklets/jewelery-2.avif', 'jewelery-2.avif'),
(45, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/anklets/jewelery-3.avif', 'jewelery-3.avif'),
(46, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/anklets/jewelery-4.avif', 'jewelery-4.avif'),
(47, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/anklets/jewelery-5.avif', 'jewelery-5.avif'),
(48, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/anklets/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(49, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/charms/jewelery-1.avif', 'jewelery-1.avif'),
(50, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/charms/jewelery-2.avif', 'jewelery-2.avif'),
(51, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/charms/jewelery-3.avif', 'jewelery-3.avif'),
(52, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/charms/jewelery-4.avif', 'jewelery-4.avif'),
(53, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/charms/jewelery-5.avif', 'jewelery-5.avif'),
(54, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/charms/jewelery-6.avif', 'jewelery-6.avif');

INSERT INTO images (product_id, url, file_name) VALUES
(55, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/cufflinks/jewelery-1.avif', 'jewelery-1.avif'),
(56, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/cufflinks/jewelery-2.avif', 'jewelery-2.avif'),
(57, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/cufflinks/jewelery-3.avif', 'jewelery-3.avif'),
(58, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/cufflinks/jewelery-4.avif', 'jewelery-4.avif'),
(59, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/cufflinks/jewelery-5.avif', 'jewelery-5.avif'),
(60, 'https://aurora-gem-images-bucket.s3.eu-north-1.amazonaws.com/pics/cufflinks/jewelery-6.avif', 'jewelery-6.avif');


-- Insert data into orders
INSERT INTO orders (order_date, customer_id, shipment) VALUES
('2025-01-02 14:30:00', 2, 40.00),
('2025-01-03 16:45:00', 3, 60.00),
('2025-01-04 11:20:00', 4, 55.00),
('2025-01-05 18:15:00', 5, 45.00),
('2025-01-06 13:10:00', 6, 70.00),
('2025-01-07 09:30:00', 7, 35.00),
('2025-01-08 20:50:00', 8, 80.00),
('2025-01-09 12:00:00', 9, 65.00),
('2025-01-10 17:05:00', 10, 30.00);
