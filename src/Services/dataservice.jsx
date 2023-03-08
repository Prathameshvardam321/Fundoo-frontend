import axios from 'axios'
const Baseurl = "http://localhost:3001/api/v1/";
let headerConfig = {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}

export const getNotes = async () => {
    let resonse = await axios.get(Baseurl + 'notes', headerConfig)
    return resonse
}

export const postNotes = async (obj) => {
    let resonse = await axios.post(Baseurl + 'notes', obj, headerConfig)
    console.log(resonse);
    return resonse.data.data
}

export const updateColor = async (obj, id) => {
    headerConfig = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    let resonse = await axios.put(Baseurl + 'notes/' + id, obj, headerConfig)
    console.log(resonse);
    return resonse.data.data
}

export const deleteNotes = async (id) => {
   
    let resonse = await axios.delete(`${Baseurl}notes/${id}`,headerConfig)
    return resonse.data.data;
}

export const updateArchieve = async (obj,id) => {
    headerConfig = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    let resonse = await axios.put(`${Baseurl}notes/${id}/Archieve`,obj,headerConfig)
    return resonse.data.data
}

export const updateTrash = async (obj,id) => {
    headerConfig = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    let resonse = await axios.put(`${Baseurl}notes/${id}/Trash`,obj,headerConfig)
    return resonse.data.data
}