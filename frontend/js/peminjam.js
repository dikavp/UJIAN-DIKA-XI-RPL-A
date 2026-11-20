
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
        <tr>
            <td class="py-2 px-3 text-center w-12">${e.id_peminjaman}</td>
            <td class="py-2 px-3 text-center">${e.id_alat}</td>
            <td class="py-2 px-3 text-sm">${e.nama_peminjam}</td>
            <td class="py-2 px-3 text-center w-16">${e.kelas}</td>
            <td class="py-2 px-3">${e.tanggal_pinjam}</td>
            <td class="py-2 px-3">${e.tanggal_kembali}</td>
            <td class="py-2 px-3 text-center w-16">${e.jumlah}</td>
            <td class="py-2 px-3 text-center w-32">${e.status}</td>
            <td class="py-2 px-3">
                <div class="py-2 px-3 flex gap-4 flex-row w-40">
                    <button onclick="editPinjaman(${e.id_peminjaman});" class="p-2 rounded-lg  hover:bg-amber-500 transition-colors duration-100 cursor-pointer bg-amber-400">Edit</button>
                    <button onclick="deletePinjaman(${e.id_peminjaman});" class="p-2 rounded-lg hover:bg-red-500 transition-colors duration-100 cursor-pointer bg-red-400 ">Delete</button>
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