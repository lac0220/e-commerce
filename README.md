# E-commerce

The web application contains two main functionalities:

1. Listing all products from a Supabase database
2. Adding a product with a unique SKU + additional details like name, price, size, height, width, length, and weight

- Products can be deleted by selecting checkbox
- The database is hosted on Supabase, a cloud PostgreSQL service with REST API support

## Tech Stack

Front-End:
- React.js
- SCSS

Bank-End:
- Supabase (PostgreSQL)
- REST API for CRUD operations 

## Setup

The project is implemented using [React](https://reactjs.org/)

### To run this project locally:

```
cd ../lorem
$ npm install
$ npm start
```
Third-Party NPM Packages:

- react-router-dom: for client side routing

- react-hook-form: for form validation

- @supabase/supabase-js – to connect to Supabase database

- mui/material: for UI components

- node-sass: for compiling SCSS to CSS

## Supabase Setup

1. Create a Supabase project at supabase.com

2. Create a table named list_items with fields:

- id (integer, primary key, auto-increment)

- sku (text, unique)

- name (text)

- price (numeric)

- size (numeric)

- height (numeric)

- width (numeric)

- length (numeric)

- weight (numeric)

3. Enable Row Level Security (RLS) for the table

4. Add policies:

- SELECT → public → USING: true

- INSERT → public → USING: true, WITH CHECK: true

- DELETE → public → USING: true

5. Copy your Supabase URL and anon key to your React project:
```
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_PROJECT_URL'
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
```
## Version

1.0 - 18/12/2022 - Publishing of the website

1.1 – 13/02/2026 – Migration to Supabase backend, removed PHP/MySQL dependency

## Author

<b>Laszlo Nemeth</b>

<div id="badges">
    <a href="https://lac0220.github.io/laszlo-nemeth-portfolio">
        <img src="https://img.shields.io/badge/Portfolio-darkblue?style=for-the-badge&logo=logoColor=white" alt="Portfolio Badge"/>
    </a>
    <a href="https://www.linkedin.com/in/nemeth0220">
        <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
    </a>
</div>