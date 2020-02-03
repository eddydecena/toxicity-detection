"use strict"

Swal.fire({
    title: 'Toxicity detection',
    text: 'This work is maked for detect de toxicity of conversations or phrases. You can contant me via twitter @eddy_decena, telegram @eddy_decena, email eddynelson02@gmail.com',
    icon: 'info',
    confirmButtonText: 'OK'
})

// get elements
const recording_button = document.getElementById('recording_button')
const recording_icon = document.getElementById('recording_icon')
const text_show = document.getElementById('voice-to-text-show')
const toxicity_result = document.getElementById('toxicity_result')

// global variable
let recording = false
const threshold = 0.9
let final_result = ""
let label_results = [
    "Identity attack",
    "Insult",
    "Obscene",
    "Severe toxicity",
    "Sexual explicit",
    "Threat",
    "Toxicity"
]

// Web speech api instance
const recognition = new webkitSpeechRecognition()
recognition.continuous = true
recognition.interimResults = false
recognition.lang = "en-US"

recognition.onresult = function(event) {
    let final_transcript = ''
    
    for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript
        }
    }
    
    text_show.innerHTML = final_transcript

    // Make prediction
    toxicity.load(threshold).then(model => {
        model.classify([final_transcript]).then(predictions => {
            predictions.forEach((pred, index) => {
                if(pred.results[0].match === null || pred.results[0].match === true){
                    final_result = final_result === "" ? 
                                    `${label_results[index]}`
                                    :`${final_result}, ${label_results[index]}`
                }
            })
    
            toxicity_result.innerHTML = final_result === "" ? 
                                        "It has not toxicity"
                                        : final_result
                                        
            final_result = ""
        })
    })
}

// handle events
recording_button.addEventListener('click', () => {
    recording = !recording
    toggle_recording(
        recording_button, 
        recording_icon,
        recognition,
        recording
    )
    toggle_start_opacity(text_show)
    toggle_start_opacity(toxicity_result)
})

// Functions
function toggle_recording(recording_button, recording_icon, recognition, recording){
    recording_button.classList.toggle('recording')

    if(recording){
        recording_icon.src = './assets/microphone-recording.svg'
        recognition.start()
        return
    }

    recording_icon.src = './assets/microphone.svg'
    recognition.stop()
}

function toggle_start_opacity(el){
    el.classList.toggle('start_opacity')
}
    