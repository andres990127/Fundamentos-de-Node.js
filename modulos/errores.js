function seRompeAsincrona(cb){
    setTimeout(() => {
        try{
            return 3 + z
        }catch(error){
            console.error('Error se rompe Asincrona')
            cb(error)
        }
    },1000)
}


seRompeAsincrona(() => {
    console.log('Hay error')
})

setTimeout(()=>{
    console.log('Still alive')
},2000)


console.log('El final')