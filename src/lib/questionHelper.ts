    import questions from '@/questions.json';

    export interface Answer {
        id: number;
        answer: string;
        icon: string;
        terminate: boolean;
        compensationAmount?: string

    }
    export interface Question {
        id: number;
        question: string;
        description: number;
        "type": string,
        answers: Answer[]
        selected: Answer
    }
    export const getQuestions = () => {
        delete require.cache[require.resolve('@/questions.json')];
        return [...questions];
    }