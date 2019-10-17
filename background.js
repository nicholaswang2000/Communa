
document.addEventListener('click', () => {
  let feafwe = window.getSelection().toString();
  let text = feafwe.toLowerCase();

  if (text.includes("russia") || text.includes("soviet")) {
    let url = chrome.runtime.getURL('soviet.mp3')

    let a = new Audio(url)
    a.play()
  } else if (text === "china" || text === "chinese") {
    let url = chrome.runtime.getURL('china.mp3')

    let a = new Audio(url)
    a.play()
  } else if (text.includes("communi")) {

    let random = Math.floor(Math.random() * 2);

    if (random === 0) {
      let url = chrome.runtime.getURL('china.mp3')

      let a = new Audio(url)
      a.play()
    } else {
      let url = chrome.runtime.getURL('soviet.mp3')

      let a = new Audio(url)
      a.play()
    }
  }
})
