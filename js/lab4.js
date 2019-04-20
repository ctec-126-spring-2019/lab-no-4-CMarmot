// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output =`
    
    <p>She... She screams in silence</p>
    <p>A sullen riot penetrating through her mind</p>
    <p>Waiting for a sign</p>
    <p>To smash the silence with the brick of self-control</p>
    <br>`
    // your code here

    return output;
}

function chorus(){
    let output = `
    <p>Are you locked up in a world</p>
    <p>That's been planned out for you?</p>
    <p>Are you feeling like a social tool without a use?</p>
    <p>Scream at me until my ears bleed</p>
    <p>I'm taking heed just for you</p>
    <br>
    `
    // your code here

    return output;
}

function verse2(){
    let output = `
    <p>She...
    She's figured out</p>
    <p>All her doubts were someone else's point of view</p>
    <p>Waking up this time</p>
    <p>To smash the silence with the brick of self-control</p>
    <br>`

    // your code here

    return output;
}




function main(){
    let finalOutput = verse1() + chorus() +verse2() + chorus() + chorus()// used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}