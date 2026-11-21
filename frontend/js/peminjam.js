
async function loadPeminjaman(){
    try {
        const res = await fetch('http://localhost:8000/api/peminjaman');
        const result = await res.json();
        return result;
    } catch (error) {
        console.error(error.message)
    }
}

function renderPeminjaman(data){
    const table = document.getElementById("tbody-peminjaman")
    data.forEach((e) => {
        table.innerHTML += `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-2 px-3 text-center w-12">${e.id_peminjaman}</td>
            <td class="py-2 px-3 text-center">${e.id_alat}</td>
            <td class="py-2 px-3 text-sm">${e.nama_peminjam}</td>
            <td class="py-2 px-3 text-center w-16">${e.kelas}</td>
            <td class="py-2 px-3 text-center whitespace-nowrap">${new Date(e.tanggal_pinjam).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</td>
            <td class="py-2 px-3 text-center whitespace-nowrap">${new Date(e.tanggal_kembali).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</td>
            <td class="py-2 px-3 text-center w-16">${e.jumlah}</td>
            <td class="py-2 px-3 text-center w-32">${e.status}</td>
            <td class="py-2 px-3">
                <div class="flex items-center justify-center gap-2">
                <button 
                    onclick="editPinjaman(${e.id_peminjaman});" 
                    class="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-900 text-sm font-medium transition-colors duration-100 cursor-pointer">
                    Edit
                </button>
                <button 
                    onclick="deletePinjaman(${e.id_peminjaman});" 
                    class="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors duration-100 cursor-pointer">
                    Delete
                </button>
                </div>
            </td>
        </tr>
  
        `;
    });
}

async function editPinjaman(id) {
    console.log(`edit ${id}`)
    try {
        const res = await fetch(`http://localhost:8000/api/peminjaman/${id}`,{
            method: 'PATCH'
        })
        
    } catch (error) {
        
    }
}
async function deletePinjaman(id) {
    console.log(`delete ${id}`)
    try {
        const res = await fetch(`http://localhost:8000/api/peminjaman/${id}`,{
            method : 'DELETE'
        });
        const result = await res.json();
        return result;
    } catch (error) {
        console.error(error.message)
    }
}

document.addEventListener('DOMContentLoaded',async () => {
    const peminjaman = await loadPeminjaman();
    console.log(peminjaman);
    renderPeminjaman(peminjaman);
})