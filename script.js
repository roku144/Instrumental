//assigning values to play notes with keyboard
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s','d','g','h','j']


//we want to get the keys as elements, so we use query selecter to get all files with .key
const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

//for each key we execuute this function
keys.forEach(key => {
    //add event listener when we click on key to run function that calls a function to play note audio
    key.addEventListener('click', () =>playnote(key))
})


//creating the ability to play notes with keyboard with event listner
document.addEventListener('keydown', e => {
    //if you hold it down, dont play weird noise
    if (e.repeat) return
    const key = e.key

     const whiteKeyIndex = WHITE_KEYS.indexOf(key)
     const blackKeyIndex = BLACK_KEYS.indexOf(key)

        //finding index of key we pressed, then corresponding that to index of array
     if (whiteKeyIndex > -1) playnote(whitekeys[whiteKeyIndex])
     if (blackKeyIndex > -1) playnote(blackkeys[blackKeyIndex])

})


//create function playnote that takes in key value from the dataset to run audio
function playnote(key) {
    const noteAudio = document.getElementById(key.dataset.note)

    //in order to remove the error where if we hold down the note
    //restarts the file at the beginning instead of replaying it
    noteAudio.currentTime = 0
    noteAudio.play()

    //adding a press state to indicate activation
    key.classList.add('active')

    //to reset the color after playing
    noteAudio.addEventListener('ended', () =>{
        key.classList.remove('active')
    })
}