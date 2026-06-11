# <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="35"> JavaScript Fundamentals

<div align="center">

# ✨ JavaScript For Frontend Developers ✨

*"Dari website yang cuma diam 🗿 menjadi website yang bisa diajak ngobrol 😎"*

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Frontend](https://img.shields.io/badge/Frontend-Developer-blue?style=for-the-badge)
![DOM](https://img.shields.io/badge/DOM-Manipulation-success?style=for-the-badge)

---

### 📚 Materi Frontend Development

### 🏛️ Chevalier Laboratory SAS

*"Once you learn JavaScript, HTML & CSS become your minions."*

</div>

---

## 🎯 Apa yang Akan Dipelajari?

```text
📦 Pengenalan JavaScript
📦 Sintaks Dasar
📦 Variabel & Tipe Data
📦 Kondisi dan Perulangan
📦 Function
📦 DOM Manipulation
📦 Event Handling
```

---

# 🟨 Chapter 1 — Pengenalan JavaScript

## 🤔 JavaScript Itu Apa?

JavaScript adalah bahasa pemrograman yang membuat website menjadi hidup.

Tanpa JavaScript:

```text
😐 Website diam
😐 Tombol tidak bereaksi
😐 Form hanya pajangan
```

Dengan JavaScript:

```text
😎 Tombol bisa diklik
😎 Form bisa divalidasi
😎 Website menjadi interaktif
😎 User experience makin keren
```

---

## 🚀 Cara Menjalankan JavaScript

### 1️⃣ Inline

```html
<button onclick="alert('Halo Dunia')">
  Klik Aku
</button>
```

---

### 2️⃣ Internal

```html
<script>
  console.log("Hello World");
</script>
```

---

### 3️⃣ External

```html
<script src="script.js"></script>
```

💡 Cara yang paling direkomendasikan untuk project nyata.

---

# ⚡ Karakteristik JavaScript

| Fitur              | Arti                                  |
| ------------------ | ------------------------------------- |
| 🧠 Interpreted     | Langsung dijalankan browser           |
| 🔄 Dynamic Typing  | Tidak perlu menentukan tipe data      |
| 🎭 Weakly Typed    | Bisa konversi tipe otomatis           |
| 🖱 Event Driven    | Berbasis aksi pengguna                |
| 🏗 Prototype Based | Pewarisan menggunakan prototype       |
| ⚡ Async            | Bisa menjalankan tugas tanpa blocking |
| 🌍 Fullstack       | Frontend maupun Backend               |
| 🎨 Multi Paradigm  | OOP, Functional, Procedural           |

---

# 🌎 Penggunaan JavaScript

```text
🌐 Web Development
📱 Mobile App
🖥 Desktop App
🎮 Game Development
☁ Backend Development
🤖 IoT
🧠 Machine Learning
📊 Data Science
```

---

# 🟦 Chapter 2 — Sintaks Dasar

## 📦 Variabel

```javascript
let nama = "Lala";
const umur = 18;
var kota = "Bandung";
```

---

## 🔢 Tipe Data

```javascript
let nama = "Lala";       // String
let umur = 18;           // Number
let aktif = true;        // Boolean
let data = null;         // Null
let kosong;             // Undefined
```

---

## 🔀 Percabangan

```javascript
let nilai = 90;

if (nilai >= 75){
   console.log("Lulus 🎉");
}else{
   console.log("Belajar lagi 😭");
}
```

---

## 🔁 Perulangan

```javascript
for(let i = 1; i <= 5; i++){
   console.log("Ngoding ke-" + i);
}
```

Output:

```text
Ngoding ke-1
Ngoding ke-2
Ngoding ke-3
Ngoding ke-4
Ngoding ke-5
```

---

## ⚙ Function

```javascript
function salam(nama){
   return `Halo ${nama} 👋`;
}

console.log(salam("Lala"));
```

---

# 🟩 Chapter 3 — DOM (Document Object Model)

## 🌳 Apa Itu DOM?

DOM adalah jembatan antara JavaScript dan HTML.

```text
JavaScript
     │
     ▼
    DOM
     │
     ▼
HTML Elements
```

Dengan DOM kita bisa:

✅ Mengambil elemen HTML
✅ Mengubah isi HTML
✅ Menambah elemen baru
✅ Menghapus elemen
✅ Memberi event pada elemen

---

## 🔍 DOM Selector

### querySelector()

```javascript
document.querySelector(".judul");
```

---

### querySelectorAll()

```javascript
document.querySelectorAll(".card");
```

---

### getElementById()

```javascript
document.getElementById("title");
```

---

### getElementsByClassName()

```javascript
document.getElementsByClassName("card");
```

---

### getElementsByTagName()

```javascript
document.getElementsByTagName("p");
```

---

# 🛠 DOM Manipulation

## innerHTML

```javascript
judul.innerHTML = "Halo Dunia";
```

---

## textContent

```javascript
judul.textContent = "Halo Dunia";
```

---

## append()

```javascript
parent.append(child);
```

---

## remove()

```javascript
element.remove();
```

---

## setAttribute()

```javascript
button.setAttribute("disabled", true);
```

---

# 🎮 Event Handling

## onclick

```javascript
button.onclick = () => {
   alert("Tombol ditekan!");
}
```

---

## change

```javascript
select.addEventListener("change", () => {
   console.log("Value berubah");
});
```

---

## submit

```javascript
form.addEventListener("submit", (e) => {
   e.preventDefault();
});
```

---

## input

```javascript
input.addEventListener("input", () => {
   console.log(input.value);
});
```

---

## keydown & keyup

```javascript
document.addEventListener("keydown", () => {
   console.log("Keyboard ditekan");
});
```

---

# 👨‍🏫 Mentor Frontend

### 🚀 Rifky Muhammad Prayudhi

* Software Engineering Student
* Freelance Web Developer
* Team Leader
* Frontend Mentor

---

### 🚀 Fa Ainama Caldera

* Software Engineering Student
* Frontend Mentor
* Teaching Experience Thailand

---

### 🚀 M Husni Naufal

* Informatics Student
* Frontend Mentor

---

# 🎯 Learning Goals

Setelah mempelajari repository ini kamu dapat:

```text
✅ Memahami dasar JavaScript
✅ Membuat variabel dan fungsi
✅ Menggunakan percabangan dan perulangan
✅ Mengakses DOM
✅ Memanipulasi HTML menggunakan JavaScript
✅ Menggunakan Event Handler
✅ Membuat website lebih interaktif
```

---

<div align="center">

## ☕ Happy Coding!

*"Console.log hari ini adalah bug besok hari."*

⭐ Star repo ini jika bermanfaat

Made with ❤️ by Lala Fadhilah Khairunisa

</div>
