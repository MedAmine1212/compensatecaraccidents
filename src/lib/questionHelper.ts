    import questions from '@/questions.json';

    export interface Answer {
        id: number;
        answer: string;
        icon: string;
        terminate: boolean;
        compensationAmountMin?: string
        compensationAmountMax?: string
        customCompensation?: boolean
        compensationEffect?: string

    }
    export interface Question {
        id: number;
        question: string;
        description: number;
        "type": string,
        answers: Answer[]
        key: string
        selected: Answer
        originalCompensation?: string
    }
    export interface DescribeValues {
        description: string;
    }

    export interface UserInfoValues {
        firstName: string;
        lastName: string;
    }

    export interface EmailFormValues {
        email: string;
    }

    export interface PhoneNumberFormValues {
        phoneNumber: string;
    }

    export type FormValues = DescribeValues | UserInfoValues | EmailFormValues | PhoneNumberFormValues;

    export interface Form {
        id: number;
        name: string;
        required: boolean;
        values: FormValues;
    }
    export const getQuestions = () => {
        delete require.cache[require.resolve('@/questions.json')];
        return [...questions.questions];
    }

    export const getForms = () => {
        delete require.cache[require.resolve('@/questions.json')];
        return [...questions.forms];
    }