console.log('connected');
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('ke khobor mama');
    }
}

const askSomething = () => {
    const decision = confirm('are you coming to the picnic');
    console.log(decision);
    if (decision === true) {
        alert('dosto bkash 500 a tk daw')
    }
    else {
        console.log('OK PONGA MARAW')
    }
}

const getUserInfo = () => {
    const name = prompt('Tell Us Your Name.')
    console.log(name);
}