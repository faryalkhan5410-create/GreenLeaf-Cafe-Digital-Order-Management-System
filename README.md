GreenLeaf Cafe : Digital Order Management
Lightweight and responsive react application that helps Greenleaf staff to build and and review customer order from menu

Features:
1. Displays menu Items with their category, name and price
2. Adds menu to the current order
3. Groups repeated selected icons in one order line
4. Removes one item at a time and removes the item completely when its quantity reches to zero
5. Calculates the total amount of order
6. Responsive 2 column layout

Technology
1. React
2. Vite Buildup
3. Javascript
4. CSS modules
5. Lucide React icons

Requirements
1. Nod.js 
2. npm
3. Git for (cloning and deployment)

Run Locally
1. Clone the GitHub repository:git clone <https://github.com/faryalkhan5410-create/GreenLeaf-Cafe-Digital-Order-Management-System>
2. Move into the project folder:cd GreenLeaf-Cafe-Final
Use the actual folder name created by your clone if it differs.
3. Install dependencies:npm install
4. Start the development server:npm run dev
5. Open the local URL printed in the terminal (usually http://localhost:5173).


Project Structure <br>
src/
|_____components/
|     |──── MenuItem/
|     |       |___MenuItem.jsx        
|     |       |___MenuItem.module.css
|     |____MenuList/
|              |___MenuList.jsx        
|              |___ MenuList.module.css
|
|___data/
|   |___data.js
|___ App.jsx
|___App.css
|___index.css
|___main.jsx
public/


Update Menu <br>
Edit src/data/data.js. Each menu entry shoild have a unique numeric id, a categoty,name and numeric price.
like:
{
     id: "11",
     category: "Coffee",
     name: "Flat White",
     price: 1100
}
after changing the menu run npm run build abd redeploy thr updated project

Live Website <br>
The application is deployed on Vercel and can be opened here: https://green-leaf-cafe-digital-order-manag.vercel.app.
<br>
Deploy to Vercel
1. Push the project to a GitHub repository.
2. Sign in to Vercel and choose Add New → Project.
3. Import the GreenLeaf Cafe GitHub repository.
4. Confirm these project settings: 
<ul>
    <li> Framework Preset: Vite </li> 
    <li>  Build Command: npm run build
    <li>  Output Directory: dist</li>
    <li>  Install Command: npm install </li>
    </ul>
5. Select Deploy.
6. When deployment completes, open the Vercel-provided URL and test the application.

<br>
Project: GreenLeaf Cafe Digital Order Management Status: Deployed on Vercel.
Live URL: https://green-leaf-cafe-digital-order-manag.vercel.app
