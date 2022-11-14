class Student{
    static number_of_student = 0
    constructor(name,age,phonenumber,board_mark){
        this.name = name
        this.age = age
        this.phonenumber = phonenumber
        this.board_mark = board_mark
        Student.number_of_student++
        
    }
    setPLacementage(minimumplacementage){
        return (minimumpalcementmargd) => {
                if (this.board_mark > minimumpalcementmargd && this.age > minimumplacementage){
                    return true
                }
                else{
                    return false
                }
            }
    }
}

let all_student = [
    new Student("alok","29","23456789","30"),
    new Student("alok1","28","23456789","35"),
    new Student("alok2","27","23456789","40"),
    new Student("alok3","26","23456789","45"),
    new Student("alok4","25","23456789","50"),
]
all_student.forEach((student) =>{
    if(student.setPLacementage(25)(32)){
        console.log(student.name)
    }
})