
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
        <tr class="border-b hover:bg-gray-50">
            <td class="py-2 px-3 text-center w-12">${e.id_peminjaman}</td>
            <td class="py-2 px-3 text-center">${e.id_alat}</td>
            <td class="py-2 px-3 text-sm">${e.nama_peminjam}</td>
            <td class="py-2 px-3 text-center w-16">${e.kelas}</td>
            <td class="py-2 px-3 text-center whitespace-nowrap">${new Date(e.tanggal_pinjam).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</td>
            <td class="py-2 px-3 text-center whitespace-nowrap">${new Date(e.tanggal_kembali).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</td>
            <td class="py-2 px-3 text-center w-16">${e.jumlah}</td>
            <td class="py-2 px-3 text-center w-32">${e.status}</td>
        </tr>
        `;
    });
}
document.addEventListener('DOMContentLoaded',async () => {
    const peminjaman = await loadPeminjaman();
    console.log(peminjaman);
    renderPeminjaman(peminjaman);
})