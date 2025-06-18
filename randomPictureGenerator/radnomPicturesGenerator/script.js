const output = document.querySelector('#image');
const btn = document.querySelector('.btn');

async function generatePic() {
  try {
    const url = 'https://source.unsplash.com/600x400/?random&sig=' + Math.random();
    console.log(url);
    output.src = url;
  } catch (error) {
    alert("Error: " + error.message);
  }
}

btn.addEventListener('click', generatePic);

// โหลดภาพอัตโนมัติเมื่อเข้าเว็บ
generatePic();
