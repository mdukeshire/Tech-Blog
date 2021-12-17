# Tech Blog
## Description

The CMS Tech Blog is a Node.js, Express, Handlebars driven app that allows users to create a new profile, make posts, and comment on posts. It uses a MySQL database and Sequelize to create the schema. The motivation for this project was to create a space to discuss the tech problems user's might be facing. It was built so that users could talk about everday things like CSS styling and niche JavaScript functions. I utilized my knowledge of routes, database creation, CRUD functions, and views to create this project. 

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To install the Tech Blog, first download the files from the Github repo, open a terminal inside the appropriate folder, and run "npm install". If you wish to seed your database with some starter data, just run "npm run seed" next. Finally, to launch the server locally enter "nodemon server.js" or "node server.js". 

## Usage
![Screenshot](Assets\Screenshot.png)


To begin using the Tech Blog, first click the Login page in the navbar. Next, enter your email, username, and password (which is stored via bcrypt on the MySQL database). From there, navigate to the homepage by clicking Home in the navbar. You can create a new post by clicking New Post in the navbar, or view another user's post by clicking on one in the homepage. Users can add comments to a post by entering the proper information into the input field underneath the post. 

## Credits
The Github repository resides at https://github.com/tjtahmas/CMS-Tech-Blog-

You can contact me with any questions or comments about the project at tjtahmas@gmail.com

## License

MIT License

Copyright (c) 2021 Thomas Tahmassebi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
---