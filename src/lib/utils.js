module.exports = {
    birth(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let birth = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()


        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            birth = birth - 1
        }
        return birth
    },
    date(timestamp) {
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2) //pq o mes vem de 0 a 11
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    }
}