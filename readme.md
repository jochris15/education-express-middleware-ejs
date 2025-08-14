# EJS & Middleware

## Template Engine
Apa itu template engine? Template engine adalah sebuah library yang digunakan untuk mengolah template HTML dengan data hasil dari aplikasi express kita secara dinamis. Dengan menggunakan template engine, kita dapat membuat halaman web yang lebih interaktif dan dinamis. Salah satu template engine yang populer digunakan di Node.js adalah **EJS (Embedded JavaScript)**.

## [EJS](https://ejs.co/)
Apa itu EJS? EJS adalah sebuah template engine yang memungkinkan kita untuk menyisipkan kode JavaScript ke dalam file HTML. 
Pada aplikasi ini, kita akan menggunakan **EJS** sebagai `views` aplikasi kita.

### Instalation
```bash
npm install ejs
```

### [Setup EJS in Express](https://expressjs.com/en/guide/using-template-engines.html)
Untuk menggunakan EJS sebagai template engine di aplikasi Express, kita perlu melakukan beberapa langkah berikut:
1. Setelah install EJS, kita perlu mengatur EJS sebagai view engine pada aplikasi Express kita dengan menambahkan kode berikut ke dalam file setup express kita dengan `app.set('view engine', 'ejs')`
2. Selanjutnya, kita perlu membuat folder bernama `views` jika tidak mau ada settingan tambahan, EJS akan mencari file template di dalam folder ini.
3. Setelah itu, kita dapat membuat file template EJS dengan ekstensi `.ejs` di dalam folder `views`. Misalnya, kita dapat membuat file `home.ejs` di dalam folder `views`.
4. Terakhir, kita dapat merender file template EJS dengan menggunakan method `res.render(namaFileEJS, {data})` pada route handler Express kita. Misalnya, kita dapat menambahkan kode berikut pada route handler untuk merender file `home.ejs`:

### [EJS Tags](https://ejs.co/#docs)
Jadi tadi kita sudah tahu bahwa EJS memungkinkan kita untuk menyisipkan kode JavaScript ke dalam file HTML. Supaya kita bisa menyisipkan kode JavaScript ke dalam syntax HTML, **kita perlu menggunakan EJS tags setiap baris**. Ada beberapa jenis EJS tags yang umum digunakan:
- `<% %>`: Digunakan untuk mengeksekusi kode JavaScript tanpa menghasilkan output HTML. Misalnya, kita dapat menggunakan tag ini untuk melakukan perulangan atau kondisi.
- `<%= %>`: Digunakan untuk mengeksekusi kode JavaScript dan menghasilkan output HTML. Misalnya, kita dapat menggunakan tag ini untuk menampilkan data dari variabel.

## Middleware
Apa itu middleware? Middleware adalah fungsi yang dapat mengakses request & response dan biasanya bersifat sebagai perantara sebelum diteruskan ke handler utama. Middleware dapat digunakan untuk beberapa hal seperti :
- Body parser : Supaya aplikasi kita bisa membaca data dari request body.
- Router : Supaya aplikasi kita bisa membuat endpoint secara lebih terstruktur.
- Error handler : Supaya aplikasi kita bisa menangani error dengan lebih baik.
- Authentication : Supaya aplikasi kita bisa melakukan autentikasi pengguna sebelum mengakses endpoint tertentu.
- Authorization : Supaya aplikasi kita bisa melakukan otorisasi pengguna sebelum mengakses endpoint tertentu.
- Dan masih banyak lagi.

### Setup Middleware
#### [Body Parser](https://expressjs.com/en/guide/using-middleware.html#middleware.built-in)
Ada beberapa body parser yang bisa kita gunakan di Express, namun pada aplikasi ini kita akan menggunakan `express.urlencoded()` agar aplikasi kita bisa membaca data yang dikirimkan melalui form HTML. 
```js
app.use(express.urlencoded({ extended: true })); // extended: true artinya kita menggunakan library `qs` untuk parsing data yang lebih kompleks
```

#### [Router](https://expressjs.com/en/guide/using-middleware.html#middleware.router)
Berguna ketika aplikasi kita memiliki banyak entitas / table , sehingga kita bisa mengelompokkan endpoint berdasarkan entitasnya.

Step by step untuk membuat router di Express :
1. Buat folder `routes` di dalam project kita.
2. Untuk membuat router, kita perlu menggunakan `express.Router()`, buat file `index.js` di dalam folder `routes` sebagai file utama router kita yang akan mengimpor router dari file lain sesuai entitasnya.
3. Buat file sesuai dengan entitasnya di dalam folder `routes`. Misalnya, kita bisa membuat file `games.js` untuk mengelola endpoint yang berhubungan dengan game. Dalam file `index.js` kita bisa mengimpor router dari file `games.js` dan menghubungkannya dengan router utama kita.
4. Import router di dalam file setup express kita dan gunakan middleware `app.use(router)` untuk menghubungkan router dengan aplikasi kita.

## Demo
## Demo
Buatlah sebuah aplikasi Express & Node-postgres untuk mengelola daftar game. Kita juga akan menggunakan `nodemon` supaya perubahan pada aplikasi kita dapat langsung terlihat tanpa perlu restart server.

### Setup
Database : game_app

```
npm init -y
npm i express pg
npm i -D nodemon
touch .gitignore
```

### Table
Table Games

| Column name     | type      | constraint |
|-----------------|:---------:|:----------:|
| name            | string    | NOT NULL   |
| gameImg         | string    | NOT NULL   |
| releaseDate     | date      | NOT NULL   |
| developer       | string    | NOT NULL   |
| genre           | string    | NOT NULL   |

## Endpoint
| Method | Route             | Deskripsi                                                              |
| :----- | :----             | :--------------------------------------------------------------------- |
| GET    | /games            | Menampilkan data seluruh `Game`                                        |
| GET    | /games/:id        | Menampilkan detail data `Game`                                         |
| GET    | /games/add        | Menampilkan form untuk menambahkan data `Game`                         |
| POST   | /games/add        | Menambahkan data `Game` ke dalam database                              |
| GET    | /games/edit/:id   | Menampilkan form untuk mengedit data `Game` berdasarkan `id`           |
| PUT   | /games/edit/:id   | Mengupdate data `Game` berdasarkan `id` yang diberikan                 |
| DELETE | /games/delete/:id | Menghapus data `Game` berdasarkan `id` yang diberikan                  |