
async function loadPeminjaman(){
    try {
        const response = await fetch('http://localhost:8000/api/peminjaman');
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message)
    }
}

function renderPeminjaman(data){
    const tbody = document.getElementById("tbody-peminjaman")
    data.forEach((e) => {
        tbody.innerHTML += `
        <tr>
            <td class="py-2 px-3 text-center w-12">${e.id_peminjaman}</td>
            <td class="py-2 px-3 text-center">${e.id_alat}</td>
            <td class="text-sm py-2 px-3">${e.nama_peminjam}</td>
            <td class="py-2 px-3 text-center w-16">${e.kelas}</td>
            <td class="py-2 px-3">${e.tanggal_pinjam}</td>
            <td class="py-2 px-3">${e.tanggal_kembali}</td>
            <td class="py-2 px-3 text-center w-16">${e.jumlah}</td>
            <td class="py-2 px-3 text-center w-32 flex flex-row gap-2">${e.status}</td>
        </tr>
        `;
    });
}
document.addEventListener('DOMContentLoaded',async () => {
    const peminjaman = await loadPeminjaman();
    console.log(peminjaman);
    renderPeminjaman(peminjaman);
})