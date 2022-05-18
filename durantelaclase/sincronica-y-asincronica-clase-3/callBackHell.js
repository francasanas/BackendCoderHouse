const copyFile = (filename, callback) => {

    searchFile(filename, (error, file) => {

        if (error) callback(error)
        else {
            readFile(filename, 'uttf-8', (eroor, texto) => {
                if (error) callback(error)
                else {
                    const nameCopy = filename + '.copy'
                    whitreFile(nameCopy, texto, (error) => {
                        if (error) callback(error)
                        else callback(null)
                    })
                }
            })
        }
    })
}
