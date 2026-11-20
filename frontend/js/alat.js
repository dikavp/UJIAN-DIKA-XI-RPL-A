
async function loadAlat(){
    try {
        const res = await fetch('http://localhost:8000/api/alat');
        const result = await res.json();
        return result;
    } catch (error) {
        console.error(error.message)
    }
}

function renderAlat(data){
    const table = document.getElementById("tbody-alat")
    data.forEach((e) => {
        table.innerHTML += `
        <tr>
            <td class="py-2 px-3 text-center w-12">${e.id_alat}</td>
            <td class="py-2 px-3 text-center">${e.nama_kategori}</td>
            <td class="py-2 px-3 text-center">${e.nama_alat}</td>
            <td class="py-2 px-3 text-sm">${e.kondisi}</td>
            <td class="py-2 px-3 text-sm">${e.stok}</td>
            <td class="py-2 px-3 text-sm">${e.lokasi}</td>
            <td class="py-2 px-3">
                <div class="py-2 px-3 flex gap-4 flex-row w-40">
                    <button onclick="editAlat(${e.id_alat});" class="p-2 rounded-lg  hover:bg-amber-500 transition-colors duration-100 cursor-pointer bg-amber-400">Edit</button>
                    <button onclick="deleteAlat(${e.id_alat});" class="p-2 rounded-lg hover:bg-red-500 transition-colors duration-100 cursor-pointer bg-red-400 ">Delete</button>
                </div>
            </td>
        </tr>   
        `;
    });
}

async function editAlat(id) {
    console.log(`edit ${id}`)
    try {
        const res = await fetch(`http://localhost:8000/api/alat/${id}`,{
            method: 'PATCH'
        })
    } catch (error) {
        
    }
}
async function deleteAlat(id) {
    console.log(`delete ${id}`)
    try {
        const res = await fetch(`http://localhost:8000/api/alat/${id}`,{
            method : 'DELETE'
        });
        const result = await res.json();
        return result;
    } catch (error) {
        console.error(error.message)
    }
}

async function createAlat(id_kategori,nama_alat,kondisi,stok,lokasi) {
    try {
        const res = await fetch("http://localhost:8000/api/alat",{
                method: "POST",
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_kategori, nama_alat, kondisi, stok, lokasi })
        })

        const result = await res.json();
        return result;
    } catch (error) {
        
    }   
}

document.addEventListener('DOMContentLoaded',async () => {
    const alat = await loadAlat();
    console.log(alat);
    renderAlat(alat);
})