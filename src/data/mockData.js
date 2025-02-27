// Import all product images
import id1 from './images/id-1.jpg';
import id2 from './images/id-2.jpg';
import id3 from './images/id-3.jpg';
import id4 from './images/id-4.jpg';
import id5 from './images/id-5.jpg';
import id6 from './images/id-6.jpg';
import id7 from './images/id-7.jpg';
import id8 from './images/id-8.jpg';
import id9 from './images/id-9.jpg';
import id10 from './images/id-10.jpg';
import id11 from './images/id-11.jpg';
import id12 from './images/id-12.jpg';
import id13 from './images/id-13.jpg';
import id14 from './images/id-14.jpg';
import id15 from './images/id-15.jpg';
import id16 from './images/id-16.jpg';
import id17 from './images/id-17.jpg';
import id18 from './images/id-18.jpg';
import id19 from './images/id-19.jpg';
import id20 from './images/id-20.jpg';
import id21 from './images/AIG.jpg';
import id22 from './images/UNICEF.jpg';
import id23 from './images/BANCO-BMG.jpg';
import id24 from './images/EVONIK.jpg';
import id25 from './images/Antony.jpg';
import id26 from './images/Palmer.jpg';
import id27 from './images/VIRGIL.jpg';
import id28 from './images/AC-MILAN-88.jpg';

const products = [
  {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":id1,"rating":{"rate":3.9,"count":120}},
  {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.","category":"men's clothing","image":id2,"rating":{"rate":4.1,"count":259}},
  {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.","category":"men's clothing","image":id3,"rating":{"rate":4.7,"count":500}},
  {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice.","category":"men's clothing","image":id4,"rating":{"rate":2.1,"count":430}},
  {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon.","category":"jewelery","image":id5,"rating":{"rate":4.6,"count":400}},
  {"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":id6,"rating":{"rate":3.9,"count":70}},
  {"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.","category":"jewelery","image":id7,"rating":{"rate":3,"count":400}},
  {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings.","category":"jewelery","image":id8,"rating":{"rate":1.9,"count":100}},
  {"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.","category":"electronics","image":id9,"rating":{"rate":3.3,"count":203}},
  {"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response.","category":"electronics","image":id10,"rating":{"rate":2.9,"count":470}},
  {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds.","category":"electronics","image":id11,"rating":{"rate":4.8,"count":319}},
  {"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity.","category":"electronics","image":id12,"rating":{"rate":4.8,"count":400}},
  {"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21.5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology.","category":"electronics","image":id13,"rating":{"rate":2.9,"count":250}},
  {"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR.","category":"electronics","image":id14,"rating":{"rate":2.2,"count":140}},
  {"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed.","category":"women's clothing","image":id15,"rating":{"rate":2.6,"count":235}},
  {"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"Faux leather material for style and comfort.","category":"women's clothing","image":id16,"rating":{"rate":2.9,"count":340}},
  {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfect for trip or casual wear.","category":"women's clothing","image":id17,"rating":{"rate":3.8,"count":679}},
  {"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V","price":9.85,"description":"Lightweight fabric with great stretch for comfort.","category":"women's clothing","image":id18,"rating":{"rate":4.7,"count":130}},
  {"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"Lightweight, roomy and highly breathable with moisture-wicking fabric.","category":"women's clothing","image":id19,"rating":{"rate":4.5,"count":146}},
  {"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print, V-Neck.","category":"women's clothing","image":id20,"rating":{"rate":3.6,"count":145}},
  {"id":21,"title":"CR7 MAN-U AIG Retro shirt 2008","price":15.99,"description":"Retro football shirt inspired by CR7's 2008 season with Manchester United.","category":"men's clothing","image":id21,"rating":{"rate":4.8,"count":190}},
  {"id":22,"title":"LM10 BARCELONA UNICEF Retro shirt 2006","price":17.99,"description":"Retro football shirt inspired by LM10's 2006 season with FC Barcelona.","category":"men's clothing","image":id22,"rating":{"rate":5.0,"count":15}},
  {"id":23,"title":"NJ11 SANTOS BMG Retro shirt 2006","price":22.99,"description":"Retro football shirt inspired by NJ11's 2006 season with Santos.","category":"men's clothing","image":id23,"rating":{"rate":4.9,"count":2}},
  {"id":24,"title":"RL9 Dortmund Retro Kit 2013","price":18.99,"description":"Retro football shirt inspired by RL9's iconic 2013 season with Borussia Dortmund.","category":"men's clothing","image":id24,"rating":{"rate":4.9,"count":120}},
  {"id":25,"title":"Antony Manchester United Kit 2023","price":19.99,"description":"Manchester United kit inspired by Antony's debut season at Old Trafford.","category":"men's clothing","image":id25,"rating":{"rate":4.7,"count":85}},
 {"id":26,"title":"Cole Palmer Chelsea Kit 2023","price":19.49,"description":"Chelsea kit inspired by Cole Palmer's first season at Stamford Bridge.","category":"men's clothing","image":id26,"rating":{"rate":4.8,"count":60}},
 {"id":27,"title":"Virgil van Dijk Liverpool Kit 2020","price":20.99,"description":"Liverpool kit inspired by Virgil van Dijk's iconic 2020 Premier League-winning season.","category":"men's clothing","image":id27,"rating":{"rate":5.0,"count":150}},
 {"id":28,"title":"Ronaldinho AC Milan Kit 2008","price":21.99,"description":"AC Milan kit inspired by Ronaldinho's remarkable 2008 season at the club.","category":"men's clothing","image":id28,"rating":{"rate":4.9,"count":110}}

];

export default products;
