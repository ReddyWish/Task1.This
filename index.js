let student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++
        switch (this.level) {
            case 2:
                this.stack.push('CSS')
                break
            case 3:
                this.stack.push('JavaScript')
                break
            case 4:
                this.stack.push('React')
                break
            case 5:
                this.stack.push('NodeJS')
                break
            case 6:
                alert('Студент выучил все технологии')
        }
        return this

    }
}


student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
console.log(student)

