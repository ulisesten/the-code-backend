const courseContentC = () => { return {
    id: "c01_topic01",
    courseID: "course_c01",
    language: "c",
    title: "1. Hola mundo en C",
    intro: "Introduccion al lenguaje c",
    code: `#include <stdio.h>

int main(){
    printf("Hola mundo\\n");
    return 0;
}`,
    video: null,
    conclusion: "Esta es la conclusion del tema"};
};

const courseContentCpp = () => { return {
    "id": "cpp01_topic01",
    "courseID": "course-cpp01",
    "language": "c",
    "title": "1. Hola mundo en C++",
    "intro": "Introduccion al lenguaje C++",
    "code": "#include <iostream>\n\nint main(){\n    std::cout << \"Hola mundo\\\\n\");\n    return 0;\n}",
    "video": null,
    "conclusion": "Esta es la conclusion del tema"};
};

const courseContentJava = () => { return {
    id: "java01_topic01",
    language: "c",
    title: "1. Hola mundo en Java",
    intro: "Introduccion al lenguaje Java",
    code: `public class Main{

    public static void main(String[] args){
        System.out.println("Hola mundo");
    }
}`,
    video: null,
    conclusion: "Esta es la conclusion del tema"};
};

export { 
    courseContentC,
    courseContentCpp,
    courseContentJava
};