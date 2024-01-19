# Overview
---
We are now past the middle of the third month of my job search journey. I've seen a lot of rejection emails
in the past couple of weeks. The only bell that rang into my mind is the fact that I need to build more experience in order to showcase effectively the skills I say I have.

So with that in mind I took upon myself to build another Responsive Admin Dashboard - The previous one I did was
solely a design, no functionality, and implemented with HTML, CSS and JavaScript.
This time though, I went for a little more challenge and realized one with React. They key things I wanted to showcase were the abilities to Write ***modular*** code using  one of the hottest JS frameworks at the moment. Also it was a fun project to discover and touch on technologies I had close to zero experience with.

---

## Deployed Project Link

- [Responsive Admin panel](https://react-responsive-admin-panel.netlify.app/)

---

## Key Takeaways:
- First thing, this project was a good way to start exploring some technologies I was not familiar with and that are
in high-demand on the market.<br>

  1. Sass / Scss

    - I learned how to define variables, so that you can later use those values across all your css files, making it a lot more easier
    - I also learned how to write a responsive application with scss, defining my breakpoints effectively
    ```
      $sm: 480px;
      $md: 768px;
      $lg: 1024px;
      $xl: 1200px;
      $xxl: 1400px;

      @mixin sm {
        @media screen and (max-width: ($sm)) {
          @content;
        }
      }
      @mixin md {
        @media screen and (max-width: ($md)) {
          @content;
        }
      }
    ```
     and conditionally rendering what needs to be depending on the viewport size.
    ```
      .email {
        font-size: 12px;

        @include xxl {
          display: none;
        }
        @include lg {
          display: block;
        }
      }
    ```
    - I also realized how easy it is to use sass/scss over pure CSS, just taking advantage of the power of indentation to define your rules, thus setting less classes on HTML elements.<br>

  2. TypeScript

    - Nothing really to be proud of but a little exposure to TypeScript. However I found it to be kind of similar to JavaScript in many ways. I'm interested to dive deeper into it in the future.<br>  

  3. Material UI

    - I discovered this incredibly useful library, using it to integrate interactive data grids to the application. The tool itself is very easy to install and set up in a file for use, 
    ```
      // If you are using npm
      npm i @mui/material @emotion/react @emotion/styled
      npm install @material-ui/core

      // Import the proper element into the file
      import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
    ```
    and use, 
    ```
      // You need first to define the shape of your rows and coloumns. Learn more at the link below.
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    ```
    And you cannot find better documentation than the official one. I will use it again in the future for grid and forms. Learn more about how to set up rows and columns for a MUI data grid [here](https://mui.com/x/react-data-grid/).<br>

    4. Recharts

      - Integrate interactive charts to the application to visualize data in a more interesting and meaningful and descriptive way.<br>

- State Management Using React.


---

## Technologies Used
- React
- TypeScript
- Material UI
- Sass / Scss
- HTML
- CSS
- Recharts

---

## What to expect next?
Coming next, I plan to explore more of the technologies I briefly touched on this project. Also the goal is to always keep an eye on what the market requests and maintain myself up-to-date to the best of my abilities.

- [] Build a desktop application using C# and ASP.net with data coming from a SQL database.
- [] A mobile application built with React and C#
- [] A fullstack web application using React, Next.js, tailwind and MongoDB
- [] Dive into devOps terminologies

---

## Similar Projects
- [Responsive Admin Panel with HTML, JavaScript and CSS](https://github.com/Johny270/responsive-admin-panel)
