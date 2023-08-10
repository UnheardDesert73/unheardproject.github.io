const print = () => {
    const apply = document.querySelector('#apply')
    const myWindow = window.open('', '#apply', 'height=400,width=600')

    myWindow.document.write(apply.innerHTML)
    myWindow.document.close()
    myWindow.focus()
    myWindow.print()

}

const printBtn = document.querySelector('#print')

printBtn.addEventListener('click', print)