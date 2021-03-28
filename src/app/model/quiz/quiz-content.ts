export interface QuizContent {
    quizId: string;
    noOfQuestion: number;

}
export interface Question {
    subject: string,
    type: string,
    text: string,
    options: Options[],
    id: string,
    questionId: string,
    answer: Answer[]
}
export interface Answer {
    correctOptions: number[];
    solution: string[]
}
export interface Options {
    id: string;
    content: string;
}