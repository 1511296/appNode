async function cargarUsuarios() {
    const res = await fetch('/api/users');
    const usuarios = await res.json();
    const lista = document.getElementById('userList');
    lista.innerHTML = '';
    usuarios.forEach(u => {
      const li = document.createElement('li');
      li.textContent = u.name;
      li.className = "bg-gray-200 px-4 py-2 rounded";
      lista.appendChild(li);
    });
  }
  
  document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    document.getElementById('nameInput').value = '';
    cargarUsuarios();
  });
  
  cargarUsuarios();
  