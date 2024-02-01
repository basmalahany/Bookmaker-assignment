var NameInput=document.getElementById('NameInput')
var URLInput=document.getElementById('URLInput')
 
var bookDataList=[]

if(localStorage.getItem('bookData')!=null){
    bookDataList=JSON.parse(localStorage.getItem('bookData'))
    displayBookD()
}

function main(){
    addDataInput()
    displayBookD()
    clearInput()
}

function addDataInput(){
    var bookData={
        bookName:NameInput.value , 
        bookUrl: URLInput.value 
    }
    bookDataList.push(bookData)
    localStorage.setItem('bookData', JSON.stringify(bookDataList))
}

function displayBookD(){
    var container=''
    for(var i=0; i<bookDataList.length; i++){
        container+=`
        <tr>
        <td> ${i+1}</td>
        <td> ${bookDataList[i].bookName}</td>
        <td> <a href="${bookDataList[i].bookUrl}" target=""> <button class="btn btn-visit"> <i class="fa-solid fa-eye"></button></td>
       <td><button class="btn btn-Del" onclick="deleteData(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button></td>

        `
    }
    document.getElementById(`tbody`).innerHTML=container
}

function clearInput(){
    NameInput.value=""
    URLInput.value=""
}


function deleteData(index){
    bookDataList.splice(index,1)
    localStorage.setItem(`bookData`, JSON.stringify(bookDataList))
    displayBookD()
}

