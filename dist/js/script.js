const listPaket = document.getElementById('list-paket')

function listScroll(val) {
  switch (val) {
    case 'left':
      listPaket.scrollLeft = 0
      break;
    case 'middle':
      listPaket.scrollLeft = listPaket.offsetWidth / 2
      break
    case 'right':
      listPaket.scrollLeft = 400
      break
    default:
      listPaket.scrollLeft = 0
      break;
  }
  console.log(listPaket.offsetWidth)
}


function handleTestimoni(index) {
  const testimoni = document.getElementsByClassName('testimoni')
  const handle = document.getElementsByClassName('handle')
  
  console.log(testimoni[1])
  for (let i = 0; i < testimoni.length; i++) {
    testimoni[i].classList.remove('next-testimoni')
    testimoni[i].classList.remove('current-testimoni')
    testimoni[i].classList.remove('prev-testimoni')
    handle[i].classList.remove('handle-active')

    if (i < index) {
      testimoni[i].classList.add('prev-testimoni')
    } else if (i > index) {
      testimoni[i].classList.add('next-testimoni')
    } else {
      testimoni[i].classList.add('current-testimoni')
      handle[i].classList.add('handle-active')
    }
  }

}