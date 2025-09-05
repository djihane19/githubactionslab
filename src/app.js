function greet(nom){
    return `Hello, ${nom}!`
}

module.exports = greet; //Ensure function is exportable
//if run directly, print output (useful for debugging)

if (require.main= module){
    console.log('World')
}
